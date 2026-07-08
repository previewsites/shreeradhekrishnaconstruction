const fs = require('fs');
const path = require('path');

const legacyDir = path.join(__dirname, 'legacy');
const assetsDir = path.join(__dirname, 'public', 'assets');

if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
}

// Read all HTML files in legacy
function findHtmlFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            findHtmlFiles(filePath, fileList);
        } else if (filePath.endsWith('.html')) {
            fileList.push(filePath);
        }
    }
    return fileList;
}

const htmlFiles = findHtmlFiles(legacyDir);
let imgCount = 0;

for (const file of htmlFiles) {
    const content = fs.readFileSync(file, 'utf8');
    const imgRegex = /src="data:image\/(png|jpeg|jpg|gif);base64,([^"]+)"/gi;
    let match;
    
    while ((match = imgRegex.exec(content)) !== null) {
        const ext = match[1] === 'jpeg' ? 'jpg' : match[1];
        const data = match[2];
        const fileName = `extracted_${path.basename(file, '.html')}_${imgCount}.${ext}`;
        const filePath = path.join(assetsDir, fileName);
        
        fs.writeFileSync(filePath, Buffer.from(data, 'base64'));
        imgCount++;
    }
}

console.log(`Successfully extracted ${imgCount} base64 images to public/assets/`);
