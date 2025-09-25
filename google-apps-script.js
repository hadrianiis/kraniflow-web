// Konfigurácia - nastavte podľa vašich potrieb
const CONFIG = {
  SHEET_ID: '1ZDdyA8-kzmGeJOzQyujWz25O6iiczd7h4cQb_CYaEdQ', // ZMEŇTE: ID vášho Google Sheet
  SHEET_NAME: 'Leads', // Názov tabuľky
  NOTIFICATION_EMAIL: 'nikell.adrian@gmail.com', // Email pre notifikácie
  COMPANY_NAME: 'KranioFlow',
};

/**
 * Hlavná funkcia pre spracovanie POST požiadaviek
 */
function doPost(e) {
  try {
    // Kontrola či existuje event object
    if (!e || !e.postData || !e.postData.contents) {
      console.error('doPost: Chýba event object alebo postData');
      return createResponse({ 
        success: false, 
        error: 'Chýbajúce POST data' 
      }, 400);
    }

    console.log('Received POST data:', e.postData.contents);
    
    const data = JSON.parse(e.postData.contents);
    
    switch (data.action) {
      case 'addContact':
        return addContactToSheet(data.data);
      case 'sendNotification':
        return sendNotificationEmail(data.data);
      default:
        return createResponse({ 
          success: false, 
          error: 'Neznáma akcia: ' + (data.action || 'undefined')
        }, 400);
    }
  } catch (error) {
    console.error('doPost error:', error);
    return createResponse({ 
      success: false, 
      error: 'Chyba pri spracovaní požiadavky: ' + error.message 
    }, 500);
  }
}

/**
 * Pridá kontakt do Google Sheets
 */
function addContactToSheet(formData) {
  try {
    console.log('Adding contact to sheet:', formData);
    
    const sheet = getOrCreateSheet();
    
    // Ak je to prvý riadok, pridaj hlavičky
    if (sheet.getLastRow() === 0) {
      const headers = [
        'Dátum a čas',
        'Meno a priezvisko', 
        'Email',
        'Telefón',
        'Vek',
        'Správa',
        'Typ zariadenia',
        'User Agent'
      ];
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      
      // Formátovanie hlavičiek
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#4285f4');
      headerRange.setFontColor('#ffffff');
    }
    
    // Pridaj nový riadok s údajmi
    const newRow = [
      formData.timestamp || new Date().toISOString(),
      formData.firstName || '',
      formData.email || '',
      formData.phone || '',
      formData.age || '',
      formData.message || '',
      formData.deviceType || 'N/A',
      formData.userAgent || 'N/A'
    ];
    
    sheet.appendRow(newRow);
    
    // Automatické formátovanie nového riadku
    const lastRow = sheet.getLastRow();
    const dataRange = sheet.getRange(lastRow, 1, 1, newRow.length);
    
    // Strieda farby riadkov
    if (lastRow % 2 === 0) {
      dataRange.setBackground('#f8f9fa');
    }
    
    // Automatické šírky stĺpcov
    sheet.autoResizeColumns(1, newRow.length);
    
    console.log('Contact added successfully, row:', lastRow);
    
    return createResponse({ 
      success: true, 
      message: 'Kontakt bol úspešne pridaný do tabuľky',
      rowNumber: lastRow
    });
    
  } catch (error) {
    console.error('addContactToSheet error:', error);
    return createResponse({ 
      success: false, 
      error: 'Chyba pri ukladaní do tabuľky: ' + error.message 
    }, 500);
  }
}

/**
 * Pošle email notifikáciu
 */
function sendNotificationEmail(data) {
  try {
    console.log('Sending notification email:', data);
    
    const { formData } = data;
    
    const subject = `Nový kontakt - ${CONFIG.COMPANY_NAME}`;
    
    const htmlBody = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
          <h1 style="margin: 0; font-size: 28px; font-weight: 300;">Nový kontakt</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9; font-size: 16px;">${CONFIG.COMPANY_NAME}</p>
        </div>
        
        <div style="padding: 30px; background: #f8f9fa;">
          <div style="background: white; padding: 25px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-top: 0; margin-bottom: 20px; font-size: 20px;">Detaily kontaktu</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; font-weight: 600; width: 120px; color: #495057;">Meno:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; color: #212529;">${formData.firstName || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; font-weight: 600; color: #495057;">Email:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; color: #212529;">
                  <a href="mailto:${formData.email}" style="color: #667eea; text-decoration: none; font-weight: 500;">${formData.email || 'N/A'}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; font-weight: 600; color: #495057;">Telefón:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; color: #212529;">
                  <a href="tel:${formData.phone}" style="color: #667eea; text-decoration: none; font-weight: 500;">${formData.phone || 'N/A'}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; font-weight: 600; color: #495057;">Vek:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; color: #212529;">${formData.age || 'N/A'} rokov</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; font-weight: 600; color: #495057;">Typ zariadenia:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; color: #212529;">${formData.deviceType || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; font-weight: 600; color: #495057;">Čas:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; color: #212529;">
                  ${new Date(formData.timestamp || Date.now()).toLocaleString('sk-SK')}
                </td>
              </tr>
              ${formData.message ? `
              <tr>
                <td style="padding: 12px 0; font-weight: 600; color: #495057; vertical-align: top;">Správa:</td>
                <td style="padding: 12px 0; color: #212529; white-space: pre-wrap; line-height: 1.6;">${formData.message}</td>
              </tr>
              ` : ''}
            </table>
          </div>
          
          <div style="margin-top: 30px; text-align: center;">
            <a href="https://docs.google.com/spreadsheets/d/${CONFIG.SHEET_ID}/edit" 
               style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; display: inline-block; font-weight: 600; font-size: 16px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
              Otvoriť Google Sheets
            </a>
          </div>
        </div>
        
        <div style="background: #e9ecef; padding: 20px; text-align: center; color: #6c757d; font-size: 14px; border-radius: 0 0 8px 8px;">
          <p style="margin: 0;">Automatická notifikácia z ${CONFIG.COMPANY_NAME}</p>
          <p style="margin: 5px 0 0 0; font-size: 12px;">Odoslané: ${new Date().toLocaleString('sk-SK')}</p>
        </div>
      </div>
    `;
    
    const textBody = `
Nový kontakt - ${CONFIG.COMPANY_NAME}

Meno: ${formData.firstName || 'N/A'}
Email: ${formData.email || 'N/A'}  
Telefón: ${formData.phone || 'N/A'}
Vek: ${formData.age || 'N/A'} rokov
Typ zariadenia: ${formData.deviceType || 'N/A'}
Čas: ${new Date(formData.timestamp || Date.now()).toLocaleString('sk-SK')}
${formData.message ? `Správa: ${formData.message}` : ''}

Google Sheets: https://docs.google.com/spreadsheets/d/${CONFIG.SHEET_ID}/edit

Automatická notifikácia z ${CONFIG.COMPANY_NAME}
Odoslané: ${new Date().toLocaleString('sk-SK')}
    `;
    
    GmailApp.sendEmail(
      CONFIG.NOTIFICATION_EMAIL,
      subject,
      textBody,
      {
        htmlBody: htmlBody,
        name: CONFIG.COMPANY_NAME
      }
    );
    
    console.log('Email notification sent successfully');
    
    return createResponse({ 
      success: true, 
      message: 'Email notifikácia bola odoslaná' 
    });
    
  } catch (error) {
    console.error('sendNotificationEmail error:', error);
    return createResponse({ 
      success: false, 
      error: 'Chyba pri odosielaní emailu: ' + error.message 
    }, 500);
  }
}

/**
 * Získa alebo vytvorí Google Sheet
 */
function getOrCreateSheet() {
  try {
    console.log('Getting/creating sheet with ID:', CONFIG.SHEET_ID);
    
    const spreadsheet = SpreadsheetApp.openById(CONFIG.SHEET_ID);
    let sheet = spreadsheet.getSheetByName(CONFIG.SHEET_NAME);
    
    if (!sheet) {
      console.log('Creating new sheet:', CONFIG.SHEET_NAME);
      sheet = spreadsheet.insertSheet(CONFIG.SHEET_NAME);
    }
    
    return sheet;
  } catch (error) {
    console.error('getOrCreateSheet error:', error);
    throw new Error('Nemožno otvoriť Google Sheet. Skontrolujte SHEET_ID: ' + error.message);
  }
}

/**
 * Vytvorí JSON response
 */
function createResponse(data, statusCode = 200) {
  const response = ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
  
  // Pridanie CORS headers
  if (statusCode !== 200) {
    console.log('Response with status code:', statusCode, 'Data:', data);
  }
  
  return response;
}

/**
 * Test funkcia pre overenie nastavenia
 * SPUSTITE TÚTO FUNKCIU PRE TESTOVANIE!
 */
function testSetup() {
  try {
    console.log('🧪 Začínam test setup...');
    
    // Test 1: Google Sheets pripojenie
    console.log('📊 Testujem Google Sheets pripojenie...');
    const sheet = getOrCreateSheet();
    console.log('✅ Google Sheets pripojenie funguje');
    console.log('   - Sheet ID:', CONFIG.SHEET_ID);
    console.log('   - Sheet Name:', CONFIG.SHEET_NAME);
    console.log('   - Počet riadkov:', sheet.getLastRow());
    
    // Test 2: Pridanie test kontaktu
    console.log('👤 Testujem pridávanie kontaktu...');
    const testFormData = {
      timestamp: new Date().toISOString(),
      firstName: 'Test User',
      email: 'test@example.com',
      phone: '+421123456789',
      age: '25',
      message: 'Toto je testovacia správa z Google Apps Script',
      deviceType: 'Desktop',
      userAgent: 'Test Browser'
    };
    
    const addResult = addContactToSheet(testFormData);
    const addResponse = JSON.parse(addResult.getContent());
    
    if (addResponse.success) {
      console.log('✅ Pridávanie kontaktov funguje, riadok:', addResponse.rowNumber);
    } else {
      console.log('❌ Chyba pri pridávaní kontaktu:', addResponse.error);
    }
    
    // Test 3: Email notifikácia (voliteľné - odkomentujte ak chcete testovať)
    console.log('📧 Testujem email notifikácie...');
    const emailResult = sendNotificationEmail({ formData: testFormData });
    const emailResponse = JSON.parse(emailResult.getContent());
    
    if (emailResponse.success) {
      console.log('✅ Email notifikácie fungujú');
    } else {
      console.log('❌ Chyba pri emailových notifikáciách:', emailResponse.error);
    }
    
    console.log('🎉 Test setup dokončený!');
    console.log('');
    console.log('📋 Súhrn:');
    console.log('   - Google Sheets: ✅');
    console.log('   - Pridávanie kontaktov: ' + (addResponse.success ? '✅' : '❌'));
    console.log('   - Email notifikácie: ' + (emailResponse.success ? '✅' : '❌'));
    console.log('');
    console.log('🚀 Váš skript je pripravený na použitie!');
    
    return {
      success: true,
      message: 'Test setup úspešný!',
      details: {
        sheets: true,
        contacts: addResponse.success,
        emails: emailResponse.success
      }
    };
    
  } catch (error) {
    console.error('❌ Setup test zlyhal:', error);
    console.log('');
    console.log('🔧 Skontrolujte:');
    console.log('   1. SHEET_ID v CONFIG je správne nastavené');
    console.log('   2. Máte prístup k Google Sheets');
    console.log('   3. Gmail API je povolené');
    
    return {
      success: false,
      message: 'Setup test zlyhal: ' + error.message,
      error: error.toString()
    };
  }
}

/**
 * Pomocná funkcia na získanie Web App URL
 */
function getWebAppUrl() {
  console.log('ℹ️  Po nasadení ako Web App, použijte túto URL vo vašom formulári:');
  console.log('https://script.google.com/macros/s/[DEPLOYMENT_ID]/exec');
  console.log('');
  console.log('🔧 Nezabudnite:');
  console.log('1. Deploy > New deployment');
  console.log('2. Type: Web app');
  console.log('3. Execute as: Me');
  console.log('4. Who has access: Anyone');
}
