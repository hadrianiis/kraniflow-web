#!/usr/bin/env node

const { exec } = require('child_process');
const os = require('os');

console.log('🔍 Testing network access for Kranioflow...\n');

// Get local IP address
function getLocalIP() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return 'localhost';
}

const localIP = getLocalIP();
const port = 3000;

console.log(`📍 Local IP: ${localIP}`);
console.log(`🔌 Port: ${port}`);
console.log(`🌐 Network URL: http://${localIP}:${port}`);
console.log(`🏠 Localhost URL: http://localhost:${port}\n`);

console.log('📱 To test on mobile:');
console.log(`1. Make sure your mobile device is on the same WiFi network`);
console.log(`2. Open browser on mobile and go to: http://${localIP}:${port}`);
console.log(`3. If it doesn't work, check firewall settings\n`);

console.log('🚀 Starting development server...');
console.log('Press Ctrl+C to stop\n');

// Start the dev server
const devProcess = exec('npm run dev', (error, stdout, stderr) => {
  if (error) {
    console.error(`❌ Error: ${error}`);
    return;
  }
  if (stderr) {
    console.error(`⚠️  Warning: ${stderr}`);
  }
  console.log(stdout);
});

devProcess.stdout.on('data', (data) => {
  console.log(data.toString());
});

devProcess.stderr.on('data', (data) => {
  console.error(data.toString());
});

// Handle process termination
process.on('SIGINT', () => {
  console.log('\n🛑 Stopping development server...');
  devProcess.kill();
  process.exit(0);
});
