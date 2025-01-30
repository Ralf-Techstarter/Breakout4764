// Bibliotheken einbinden
const express = require('express');
const path = require('path');

// Express-App erstellen
const app = express();

// Konfiguration von Host und Port
const host = "localhost";
const port = 8080;

// Wörter importieren aus der Datei words.js
const words = require('./public/words');

// Bereitstellung des Ordners public
app.use(express.static(path.join(__dirname, 'public')));

// Startseite
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API-Endpunkt für die Wörter (Schnittstelle)
app.get('/api/words', (req, res) => {
    res.json(words);
});

// Server starten
app.listen(port, host, () => {
    console.log(`Server läuft unter http://${host}:${port}`);
});