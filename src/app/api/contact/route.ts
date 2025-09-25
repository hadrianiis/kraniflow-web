import { NextRequest, NextResponse } from 'next/server';
import type { ContactFormData, ContactFormResponse, DeviceType } from '@/types/contact';

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
 * Sanitizácia vstupu - odstráni potenciálne nebezpečné znaky
 */
function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, '') // Odstráni HTML tagy
    .replace(/javascript:/gi, '') // Odstráni JavaScript
    .replace(/on\w+=/gi, '') // Odstráni event handlery
    .trim()
    .substring(0, 1000); // Obmedzi dĺžku
}

/**
 * Rate limiting - jednoduchá implementácia
 */
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minút
const RATE_LIMIT_MAX_REQUESTS = 5; // Max 5 požiadaviek za 15 min

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const userLimit = rateLimitMap.get(ip);
  
  if (!userLimit || now > userLimit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }
  
  if (userLimit.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }
  
  userLimit.count++;
  return true;
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
    // Rate limiting check
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    if (!checkRateLimit(ip)) {
      return NextResponse.json({
        success: false,
        error: 'Príliš veľa požiadaviek. Skúste to znovu neskôr.'
      }, { status: 429 });
    }


    const body = await request.json();
    const { firstName, email, phone, age, message } = body;

    // Sanitizácia vstupov
    const sanitizedData = {
      firstName: sanitizeInput(firstName || ''),
      email: sanitizeInput(email || ''),
      phone: sanitizeInput(phone || ''),
      age: sanitizeInput(age || ''),
      message: sanitizeInput(message || ''),
    };

    // Validácia povinných polí s sanitizovanými dátami
    if (!sanitizedData.firstName?.trim()) {
      const errorResponse: ContactFormResponse = {
        success: false,
        error: 'Meno je povinné'
      };
      return NextResponse.json(errorResponse, { status: 400 });
    }

    if (!sanitizedData.email?.trim()) {
      const errorResponse: ContactFormResponse = {
        success: false,
        error: 'Email je povinný'
      };
      return NextResponse.json(errorResponse, { status: 400 });
    }

    if (!sanitizedData.phone?.trim()) {
      const errorResponse: ContactFormResponse = {
        success: false,
        error: 'Telefónne číslo je povinné'
      };
      return NextResponse.json(errorResponse, { status: 400 });
    }

    if (!sanitizedData.age?.trim()) {
      const errorResponse: ContactFormResponse = {
        success: false,
        error: 'Vek je povinný'
      };
      return NextResponse.json(errorResponse, { status: 400 });
    }

    if (!sanitizedData.message?.trim()) {
      const errorResponse: ContactFormResponse = {
        success: false,
        error: 'Správa je povinná'
      };
      return NextResponse.json(errorResponse, { status: 400 });
    }

    // Validácia formátov s sanitizovanými dátami
    if (!isValidEmail(sanitizedData.email)) {
      const errorResponse: ContactFormResponse = {
        success: false,
        error: 'Neplatný formát emailu'
      };
      return NextResponse.json(errorResponse, { status: 400 });
    }

    if (!isValidPhone(sanitizedData.phone)) {
      const errorResponse: ContactFormResponse = {
        success: false,
        error: 'Neplatný formát telefónneho čísla'
      };
      return NextResponse.json(errorResponse, { status: 400 });
    }

    if (!isValidAge(sanitizedData.age)) {
      const errorResponse: ContactFormResponse = {
        success: false,
        error: 'Vek musí byť medzi 1 a 120 rokov'
      };
      return NextResponse.json(errorResponse, { status: 400 });
    }

    // Získanie User Agent a detekcia typu zariadenia
    const userAgent = request.headers.get('user-agent') || 'Unknown';
    const deviceType = getDeviceType(userAgent);

    // Pripravenie dát pre kontaktný formulár
    const formData: ContactFormData = {
      firstName: sanitizedData.firstName.trim(),
      email: sanitizedData.email.trim(),
      phone: sanitizedData.phone.trim(),
      age: sanitizedData.age.trim(),
      message: sanitizedData.message.trim(),
      deviceType,
      userAgent: sanitizeInput(userAgent),
      timestamp: new Date().toISOString(),
    };

    console.log('Contact form data received:', {
      ...formData,
      userAgent: userAgent.substring(0, 100) + '...' // Log iba prvých 100 znakov
    });

    // Simulácia úspešného spracovania formulára
    const result = {
      success: true,
      message: 'Kontakt bol úspešne prijatý',
      rowNumber: Math.floor(Math.random() * 1000) + 1
    };

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
  return NextResponse.json({
    message: 'Contact API endpoint is working',
    timestamp: new Date().toISOString(),
    deviceDetection: {
      userAgent: 'Test',
      deviceType: getDeviceType('Test'),
    },
    status: 'Ready to receive contact form submissions'
  });
}
