const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const inputDir = path.join(__dirname, 'src', 'assets', 'img');

async function convertImages() {
    const files = fs.readdirSync(inputDir);

    for (const file of files) {
        const filePath = path.join(inputDir, file);
        const ext = path.extname(file).toLowerCase();

        if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
            const name = path.basename(file, ext);
            const formats = ["avif", "webp"];

            for (const format of formats) {
                const avifPath = path.join(inputDir, name + '.' + format);

                try {
                    await sharp(filePath)
                        .avif({ quality: 80 })
                        .toFile(avifPath);

                    console.log(`Converted ${file} to ${name}.${format}`);

                    fs.unlinkSync(filePath);
                    console.log(`Removed original ${file}`);
                } catch (error) {
                    console.error(`Error converting ${file}:`, error);
                }
            }
        }
    }
}

convertImages();