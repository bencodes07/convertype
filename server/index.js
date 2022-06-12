const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();

app.use(cors());

app.listen(4000, () => {
    console.log('Server Works! At port 4000');
});

app.get('/download', (req,res) => {
  res.header('Content-Disposition', 'attachment; filename="video.mp4"');
  
  var URL = req.query.URL;
  var FORMAT = req.query.FORMAT;

  ytdl(URL, {
    format: FORMAT,
    quality: 'highest',
  }).pipe(res);
});