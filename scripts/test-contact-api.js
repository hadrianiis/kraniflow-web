#!/usr/bin/env node

/**
 * Test script pre overenie Contact API endpointu
 * Spustite: node scripts/test-contact-api.js
 */

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

async function testContactAPI() {
  console.log('🧪 Testovanie Contact API endpointu...\n');

  try {
    // Test 1: GET endpoint pre konfiguráciu
    console.log('1️⃣ Testovanie GET endpointu...');
    const getResponse = await fetch(`${BASE_URL}/api/contact`);
    const getData = await getResponse.json();
    
    console.log('✅ GET endpoint funguje');
    console.log('📊 Konfigurácia:', getData.configuration);
    console.log('💡 Inštrukcie:', getData.instructions);
    console.log('');

    // Test 2: POST endpoint s testovacími údajmi
    console.log('2️⃣ Testovanie POST endpointu...');
    const testFormData = {
      firstName: 'Test User',
      email: 'test@example.com',
      phone: '+421123456789',
      age: '25',
      message: 'Toto je testovacia správa z test scriptu'
    };

    const postResponse = await fetch(`${BASE_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testFormData),
    });

    const postData = await postResponse.json();

    if (postData.success) {
      console.log('✅ POST endpoint funguje');
      console.log('📝 Testovací kontakt bol úspešne odoslaný');
      console.log('🆔 Riadok v Google Sheets:', postData.data?.rowNumber);
    } else {
      console.log('❌ POST endpoint zlyhal');
      console.log('🚨 Chyba:', postData.error);
    }

  } catch (error) {
    console.error('❌ Test zlyhal:', error.message);
    
    if (error.code === 'ECONNREFUSED') {
      console.log('💡 Tip: Uistite sa, že development server beží (npm run dev)');
    }
  }

  console.log('\n🏁 Test dokončený');
}

// Spustenie testu
testContactAPI();
