const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.redirect('/home');
})

router.get('/home', (req, res) => {
    res.render('homapage.ejs');
})
router.get('/face_detection', (req, res) => {
    res.render('face_detection.ejs');
})
router.get('/speech_to_text', (req, res) => {
    res.render('speech_to_text.ejs');
})
router.get('/text_to_speech', (req, res) => {
    res.render('text_to_speech.ejs');
})

module.exports = router;