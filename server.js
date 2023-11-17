// Charger les variables d'environnement depuis le fichier .env
require('dotenv').config();

// Importer le module express pour la création d'un serveur web
const express = require('express');
const app = express();

// Importer le module path pour la gestion des chemins de fichiers
const path = require('path');

// Importer le module dotenv pour la configuration des variables d'environnement
const dotenv = require('dotenv');

// Configuration dotenv (charge les variables d'environnement à partir du fichier .env)
dotenv.config();

// Définir le dossier 'public' comme dossier statique pour les fichiers tels que les styles CSS et les images
app.use(express.static(path.join(__dirname, 'public')));

// Définir le moteur de vue et le dossier des modèles pour les fichiers Pug
app.set(`view engine`, `pug`);
app.set(`views`, path.join(__dirname, 'templates'));

// Importer le module 'routes.js' et l'assigner à la variable 'router'
const router = require('./app/routes.js');
router(app)


// Lancer le serveur en écoutant sur le port spécifié dans la variable d'environnement PORT
app.listen(process.env.PORT, () => {
    if (process.env.APP_ENV) {
        console.log(`le serveur http est : http://localhost:${process.env.PORT}`);
    }
});