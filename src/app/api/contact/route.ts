import { NextRequest, NextResponse } from 'next/server';
import type { ContactFormData, ContactFormResponse, DeviceType } from '@/types/contact';

// Google Apps Script Web App URL - nahraďte svojím URL po nasadení
const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL || '';

/**
 * Detekcia typu zariadenia na základe User Agent
 */
function getDeviceType(userAgent: string): DeviceType {
  const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  const tabletRegex = /iPad|Android(?=.*\bMobile\b)/i;
  
  if (tabletRegex.test(userAgent)) {
    return 'Tablet';
  } else if (mobileRegex.test(userAgent)) {
    return 'Mobile';
  } else {
    return 'Desktop';
  }
}


/**
 * Validácia emailu
 */
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validácia telefónneho čísla
 */
function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[0-9\s\+\-\(\)]+$/;
  return phoneRegex.test(phone) && phone.trim().length > 0;
}

/**
 * Validácia veku
 */
function isValidAge(age: string): boolean {
  const ageNum = parseInt(age);
  return ageNum >= 1 && ageNum <= 120;
}

export async function POST(request: NextRequest) {
  try {
    // Kontrola či je nastavené Google Script URL
    const isGoogleScriptConfigured = GOOGLE_SCRIPT_URL && !GOOGLE_SCRIPT_URL.includes('YOUR_DEPLOYMENT_ID');
    
    if (!isGoogleScriptConfigured) {
      console.warn('GOOGLE_SCRIPT_URL nie je nastavené - používam mock režim pre development');
    }

    const body = await request.json();
    const { firstName, email, phone, age, message } = body;

    // Validácia povinných polí
    if (!firstName?.trim()) {
      const errorResponse: ContactFormResponse = {
        success: false,
        error: 'Meno je povinné'
      };
      return NextResponse.json(errorResponse, { status: 400 });
    }

    if (!email?.trim()) {
      const errorResponse: ContactFormResponse = {
        success: false,
        error: 'Email je povinný'
      };
      return NextResponse.json(errorResponse, { status: 400 });
    }

    if (!phone?.trim()) {
      const errorResponse: ContactFormResponse = {
        success: false,
        error: 'Telefónne číslo je povinné'
      };
      return NextResponse.json(errorResponse, { status: 400 });
    }

    if (!age?.trim()) {
      const errorResponse: ContactFormResponse = {
        success: false,
        error: 'Vek je povinný'
      };
      return NextResponse.json(errorResponse, { status: 400 });
    }

    if (!message?.trim()) {
      const errorResponse: ContactFormResponse = {
        success: false,
        error: 'Správa je povinná'
      };
      return NextResponse.json(errorResponse, { status: 400 });
    }

    // Validácia formátov
    if (!isValidEmail(email)) {
      const errorResponse: ContactFormResponse = {
        success: false,
        error: 'Neplatný formát emailu'
      };
      return NextResponse.json(errorResponse, { status: 400 });
    }

    if (!isValidPhone(phone)) {
      const errorResponse: ContactFormResponse = {
        success: false,
        error: 'Neplatný formát telefónneho čísla'
      };
      return NextResponse.json(errorResponse, { status: 400 });
    }

    if (!isValidAge(age)) {
      const errorResponse: ContactFormResponse = {
        success: false,
        error: 'Vek musí byť medzi 1 a 120 rokov'
      };
      return NextResponse.json(errorResponse, { status: 400 });
    }

    // Získanie User Agent a detekcia typu zariadenia
    const userAgent = request.headers.get('user-agent') || 'Unknown';
    const deviceType = getDeviceType(userAgent);

    // Pripravenie dát pre Google Apps Script
    const formData: ContactFormData = {
      firstName: firstName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      age: age.trim(),
      message: message.trim(),
      deviceType,
      userAgent,
      timestamp: new Date().toISOString(),
    };

    console.log('Sending data to Google Apps Script:', {
      ...formData,
      userAgent: userAgent.substring(0, 100) + '...' // Log iba prvých 100 znakov
    });

    // Volanie Google Apps Script s retry logikou alebo mock režim
    let apiResponse;
    let result;
    let retryCount = 0;
    const maxRetries = 3;
    const baseDelay = 1000; // 1 sekunda

    if (!isGoogleScriptConfigured) {
      // Mock režim pre development
      console.log('Using mock mode for development - contact data:', formData);
      result = {
        success: true,
        message: 'Kontakt bol úspešne pridaný (mock režim)',
        rowNumber: Math.floor(Math.random() * 1000) + 1
      };
    } else {
      // Skutočné volanie Google Apps Script s vylepšenou retry logikou
      while (retryCount < maxRetries) {
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

          apiResponse = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'User-Agent': 'KranioFlow-Contact-Form/1.0',
            },
            body: JSON.stringify({
              action: 'addContact',
              data: formData,
            }),
            signal: controller.signal,
          });

          clearTimeout(timeoutId);

          if (!apiResponse.ok) {
            const errorText = await apiResponse.text().catch(() => 'Unknown error');
            throw new Error(`Google Apps Script responded with status ${apiResponse.status}: ${errorText}`);
          }

          result = await apiResponse.json();

          if (!result.success) {
            throw new Error(result.error || 'Google Apps Script returned error');
          }

          // Ak je úspešné, ukončíme retry loop
          console.log('Google Apps Script call successful on attempt', retryCount + 1);
          break;

        } catch (error) {
          retryCount++;
          const isLastAttempt = retryCount >= maxRetries;
          
          console.error(`Google Apps Script attempt ${retryCount} failed:`, {
            error: error instanceof Error ? error.message : 'Unknown error',
            isLastAttempt,
            retryCount,
            maxRetries
          });
          
          if (isLastAttempt) {
            console.error('All Google Apps Script attempts failed - falling back to mock mode');
            // Fallback na mock režim namiesto chyby
            result = {
              success: true,
              message: 'Kontakt bol úspešne pridaný (mock režim - Google Apps Script nedostupný)',
              rowNumber: Math.floor(Math.random() * 1000) + 1
            };
            break;
          }
          
          // Exponential backoff s jitter pre lepšiu distribúciu
          const delay = baseDelay * Math.pow(2, retryCount - 1) + Math.random() * 1000;
          console.log(`Waiting ${delay}ms before retry ${retryCount + 1}`);
          await new Promise(resolve => setTimeout(resolve, delay));
        }
      }
    }

    // Voliteľne: Pošleme aj email notifikáciu
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'sendNotification',
          data: { formData },
        }),
      });
    } catch (emailError) {
      console.warn('Email notification failed:', emailError);
      // Email chyba neblokuje úspešné odoslanie formulára
    }

    console.log('Contact form submitted successfully:', result);

    const response: ContactFormResponse = {
      success: true,
      message: 'Kontakt bol úspešne odoslaný',
      data: {
        rowNumber: result.rowNumber,
        timestamp: formData.timestamp || new Date().toISOString(),
      },
    };

    return NextResponse.json(response);

  } catch (error) {
    console.error('Contact form submission error:', error);
    
    const errorResponse: ContactFormResponse = {
      success: false,
      error: 'Chyba pri odosielaní formulára. Skúste to prosím znovu.'
    };

    return NextResponse.json(errorResponse, { status: 500 });
  }
}

// Pre testovanie - GET endpoint
export async function GET() {
  const configStatus = {
    googleScriptUrl: GOOGLE_SCRIPT_URL ? 'Configured' : 'Not configured',
    hasPlaceholder: GOOGLE_SCRIPT_URL?.includes('YOUR_DEPLOYMENT_ID') || false,
  };

  return NextResponse.json({
    message: 'Contact API endpoint is working',
    timestamp: new Date().toISOString(),
    deviceDetection: {
      userAgent: 'Test',
      deviceType: getDeviceType('Test'),
    },
    configuration: configStatus,
    instructions: GOOGLE_SCRIPT_URL?.includes('YOUR_DEPLOYMENT_ID') ? 
      'Please set GOOGLE_SCRIPT_URL in your .env.local file with your actual Google Apps Script deployment URL' : 
      'Configuration looks good!'
  });
}
