const { getDownloadPdfPath } = require('../../models/downloads.model');

/**
 * Asynchronously handles HTTP GET request for downloading the PDF file.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} A Promise that resolves once the file is sent.
 */
async function httpGetDownloadPdf(req, res) {
    const filePath = getDownloadPdfPath();
    
    res.setHeader('Content-disposition', 'attachment; filename=cv_costelas_denis.pdf');
    res.setHeader('Content-type', 'application/pdf');

    res.status(200).sendFile(filePath, (err) => {
        if (err) {
            console.error('Error sending file:', err);
            res.status(err.status).end();
        } else {
            console.log('File sent successfully');
        }
    });
}

module.exports = {
    httpGetDownloadPdf
}