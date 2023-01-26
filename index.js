const express = require('express');
const app = express();

const superSaiens = [
  {name: 'broly', lvlup: 'SS&'},
  {name: 'goku', lvlup: 'SS4'},
  {name: 'vegeta', lvlup: 'SS3'}
];

app.get('/supersaiens', (req, res) => {
  const accept = req.get('Accept');
  if (accept === 'application/json') {
    res.json(superSaiens);
  } else if (accept === 'application/xml') {
    const convert = require('xml-js');
    const xml = convert.json2xml(superSaiens, {compact: true, spaces: 4});
    res.set('Content-Type', 'application/xml');
    res.send(xml);
  } else {
    res.status(406).send('Not Acceptable');
  }
});




const jsonUrl = 'http://monservice.com/data.json';

fetch(jsonUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Traitement des données
  })
  .catch(error => console.error(error));




  const xmlUrl = 'http://monservice.com/data.xml';

fetch(xmlUrl)
  .then(response => response.text())
  .then(data => {
    console.log(data);
    // Traitement des données
  })
  .catch(error => console.error(error));




const fs = require('fs');
const saiyansFile = './saiyans.json';

app.use(express.json()); // pour pouvoir lire les données JSON dans le corps de la requête

app.post('/saiyans', (req, res) => {
    fs.readFile(saiyansFile, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send({ error: 'Impossible de lire le fichier des saiyans' });
            return;
        }

        let saiyans;
        try {
            saiyans = JSON.parse(data);
        } catch (e) {
            res.status(500).send({ error: 'Impossible de parser le fichier des saiyans' });
            return;
        }

        // Ajout d'un saiyan à la liste
        saiyans.push(req.body);

        fs.writeFile(saiyansFile, JSON.stringify(saiyans), (err) => {
            if (err) {
                res.status(500).send({ error: 'Impossible d\'écrire le fichier des saiyans' });
                return;
            }

            res.status(201).send





app.listen(3000, () => console.log('Server en marche sur le port 3000'));



  