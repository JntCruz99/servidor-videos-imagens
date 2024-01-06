const express = require('express');

const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;


const imagesDirectory = path.join(__dirname, 'img');

const pdfDirectory = path.join(__dirname, 'pdf');

const videosDirectory = path.join(__dirname, 'videos');

app.use('/img', express.static(imagesDirectory));

app.use('/pdf', express.static(pdfDirectory));

app.use('/videos', express.static(videosDirectory));

app.listen(PORT, () => {
  console.log(`Servidor de imagens rodando em http://localhost:${PORT}`);
});

