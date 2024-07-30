const path = require('path');

/**
 * Retrieves the file path for the PDF to be downloaded.
 * @returns {string} The file path for the PDF.
 */
function getDownloadPdfPath() {
    const parentDir = path.resolve(__dirname, '..');

    const filePath = path.join(parentDir, 'public', 'cv_costelas_denis.pdf');
    return filePath;
}
module.exports = {
    getDownloadPdfPath,
}