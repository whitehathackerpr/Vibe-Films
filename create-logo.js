const fs = require('fs');
const { createCanvas } = require('canvas');

// Create a smaller 256x256 canvas
const canvas = createCanvas(256, 256);
const ctx = canvas.getContext('2d');

// Fill background
ctx.fillStyle = '#ff6c00'; // Orange color
ctx.fillRect(0, 0, 256, 256);

// Draw text
ctx.font = 'bold 48px Arial';
ctx.fillStyle = 'white';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('VIBE', 128, 100);
ctx.fillText('FILMS', 128, 156);

// Save to file
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync('public/images/logo.png', buffer);
console.log('Logo created at public/images/logo.png');

// Create a smaller version for favicon
const faviconCanvas = createCanvas(32, 32);
const faviconCtx = faviconCanvas.getContext('2d');

// Fill background
faviconCtx.fillStyle = '#ff6c00';
faviconCtx.fillRect(0, 0, 32, 32);

// Draw a simple 'V' letter
faviconCtx.font = 'bold 24px Arial';
faviconCtx.fillStyle = 'white';
faviconCtx.textAlign = 'center';
faviconCtx.textBaseline = 'middle';
faviconCtx.fillText('V', 16, 16);

// Save to file
const faviconBuffer = faviconCanvas.toBuffer('image/png');
fs.writeFileSync('public/images/favicon.ico', faviconBuffer);
console.log('Favicon created at public/images/favicon.ico'); 