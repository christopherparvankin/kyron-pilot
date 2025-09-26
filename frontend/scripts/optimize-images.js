#!/usr/bin/env node

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './public/stock';
const outputDir = './public/stock/optimized';

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Image optimization settings
const configs = [
  {
    suffix: '_webp',
    format: 'webp',
    quality: 85,
    width: 1920,
    height: 1080
  },
  {
    suffix: '_avif',
    format: 'avif',
    quality: 80,
    width: 1920,
    height: 1080
  },
  {
    suffix: '_mobile',
    format: 'webp',
    quality: 80,
    width: 768,
    height: 432
  }
];

async function optimizeImage(inputPath, outputPath, config) {
  try {
    await sharp(inputPath)
      .resize(config.width, config.height, {
        fit: 'cover',
        position: 'center'
      })
      .toFormat(config.format, { quality: config.quality })
      .toFile(outputPath);
    
    const originalSize = fs.statSync(inputPath).size;
    const optimizedSize = fs.statSync(outputPath).size;
    const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
    
    console.log(`✅ ${path.basename(inputPath)} → ${path.basename(outputPath)} (${savings}% smaller)`);
  } catch (error) {
    console.error(`❌ Error optimizing ${inputPath}:`, error.message);
  }
}

async function optimizeAllImages() {
  const files = fs.readdirSync(inputDir).filter(file => 
    file.match(/\.(jpeg|jpg|png)$/i)
  );

  console.log(`🖼️  Found ${files.length} images to optimize...\n`);

  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const baseName = path.parse(file).name;
    const extension = path.parse(file).ext;

    console.log(`\n📸 Processing ${file}...`);

    for (const config of configs) {
      const outputFileName = `${baseName}${config.suffix}.${config.format}`;
      const outputPath = path.join(outputDir, outputFileName);
      
      await optimizeImage(inputPath, outputPath, config);
    }
  }

  console.log('\n🎉 Image optimization complete!');
  console.log(`\n📁 Optimized images saved to: ${outputDir}`);
  console.log('\n💡 Usage:');
  console.log('   - Use _webp for modern browsers (best compression)');
  console.log('   - Use _avif for cutting-edge browsers (smallest size)');
  console.log('   - Use _mobile for mobile devices (faster loading)');
}

// Run optimization
optimizeAllImages().catch(console.error);
