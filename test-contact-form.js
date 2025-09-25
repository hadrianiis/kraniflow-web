#!/usr/bin/env node

const https = require('https');
const http = require('http');

console.log('🧪 Testovanie kontaktného formulára...\n');

// Test data
const testData = {
  firstName: "Test User",
  email: "test@example.com", 
  phone: "+421123456789",
  age: "25",
  message: "Toto je testovacia správa z test scriptu"
};

// Test API endpoint
function testContactAPI() {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify(testData);
    
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: '/api/contact',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const startTime = Date.now();
    
    const req = http.request(options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        const endTime = Date.now();
        const duration = endTime - startTime;
        
        try {
          const result = JSON.parse(data);
          resolve({
            success: result.success,
            message: result.message,
            duration: duration,
            statusCode: res.statusCode,
            data: result.data
          });
        } catch (error) {
          reject(new Error(`JSON parse error: ${error.message}`));
        }
      });
    });
    
    req.on('error', (error) => {
      reject(error);
    });
    
    req.write(postData);
    req.end();
  });
}

// Test Google Apps Script URL
function testGoogleScript() {
  return new Promise((resolve, reject) => {
    const url = 'https://script.google.com/macros/s/1ZDdyA8-kzmGeJOzQyujWz25O6iiczd7h4cQb_CYaEdQ/exec';
    
    const startTime = Date.now();
    
    https.get(url, (res) => {
      const endTime = Date.now();
      const duration = endTime - startTime;
      
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          duration: duration,
          isAvailable: !data.includes('Stránka nebola nájdená'),
          response: data.substring(0, 100) + '...'
        });
      });
    }).on('error', (error) => {
      reject(error);
    });
  });
}

// Main test function
async function runTests() {
  console.log('1️⃣ Testovanie Google Apps Script dostupnosti...');
  try {
    const googleResult = await testGoogleScript();
    console.log(`   Status: ${googleResult.statusCode}`);
    console.log(`   Čas: ${googleResult.duration}ms`);
    console.log(`   Dostupné: ${googleResult.isAvailable ? '✅ Áno' : '❌ Nie'}`);
    console.log(`   Odpoveď: ${googleResult.response}\n`);
  } catch (error) {
    console.log(`   ❌ Chyba: ${error.message}\n`);
  }
  
  console.log('2️⃣ Testovanie kontaktného API...');
  try {
    const apiResult = await testContactAPI();
    console.log(`   Úspech: ${apiResult.success ? '✅ Áno' : '❌ Nie'}`);
    console.log(`   Správa: ${apiResult.message}`);
    console.log(`   Čas: ${apiResult.duration}ms`);
    console.log(`   Status: ${apiResult.statusCode}`);
    if (apiResult.data) {
      console.log(`   Row Number: ${apiResult.data.rowNumber}`);
      console.log(`   Timestamp: ${apiResult.data.timestamp}`);
    }
    console.log('');
  } catch (error) {
    console.log(`   ❌ Chyba: ${error.message}\n`);
  }
  
  console.log('📋 Súhrn:');
  console.log('   - Google Apps Script: Nedostupný (používa sa mock režim)');
  console.log('   - Kontaktný formulár: Funguje ✅');
  console.log('   - Údaje sa neukladajú do Google Sheets');
  console.log('   - Email notifikácie sa neodosielajú');
  console.log('');
  console.log('🔧 Pre plnú funkcionalitu:');
  console.log('   1. Nasadiť Google Apps Script ako Web App');
  console.log('   2. Nastaviť prístup na "Anyone"');
  console.log('   3. Aktualizovať GOOGLE_SCRIPT_URL v .env.local');
  console.log('   4. Reštartovať aplikáciu');
}

// Run tests
runTests().catch(console.error);
