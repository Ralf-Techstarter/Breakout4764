// Bibliotheken einbinden
const express = require('express');
const path = require('path');

// Express-App erstellen
const app = express();

// Konfiguration von Host und Port
const host = "localhost";
const port = 8080;

// Array mit zu ratenden Wörtern
const words = ['algorithm', 'encryption', 'interface', 'developer', 'deployment', 'processor', 'mainframe', 'timestamp', 'backslash', 'namespace', 
    'databreach', 'heuristic', 'iteration', 'hyperlink', 'megabyte', 'bytearray', 'checksum', 'stateless', 'networking', 'histogram', 'executable', 
    'framework', 'bandwidth', 'plaintext', 'recursion', 'firewalls', 'binarytree', 'loadbalanc', 'database', 'keylogger', 'compilers', 'cloudshare', 
    'middleware', 'registries', 'formatting', 'scripting', 'debuglevel', 'throughput', 'bootloader', 'datacenter', 'loadfactor', 'containers', 
    'bytebuffer', 'biosystem', 'subroutine', 'workgroup', 'sessionid', 'fileaccess', 'polymorph', 'scripting', 'checksum', 'plaintext', 'registries', 
    'workgroup', 'formatting', 'algorithm', 'interface', 'encryption', 'namespace', 'mainframe', 'backslash', 'megabyte', 'heuristic', 'bytearray', 
    'hyperlink', 'stateless', 'iteration', 'networking', 'deployment', 'framework', 'processor', 'binarytree', 'firewalls', 'recursion', 'developers', 
    'bootloader', 'loadbalanc', 'database', 'heuristics', 'middleware', 'registries', 'throughput', 'megabytes', 'frameworks', 'timestamps', 
    'checksum', 'datacenter', 'biosystem', 'scripting', 'subroutine', 'debuglevel', 'bandwidths', 'containers'];

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