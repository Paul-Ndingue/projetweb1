import express from "express";
import compression from "compression";
import helmet from "helmet";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

import sequelize from "./config/connectionDB.js";
import categorieRouter from "./routes/CategorieRoutes.js";
import produitRouter from "./routes/ProduitsRoutes.js";
import commandeRouter from "./routes/CommandeRoutes.js";
import clientRouter from "./routes/ClientRoutes.js";
import Review from "./models/ReviewsModel.js";
import reviewRouter from "./routes/ReviewRoutes.js";
import stockRouter from "./routes/StockRoutes.js";
import detailsCommandeRouter from "./routes/DetailCommandeRoutes.js";
import methodepayementRouter from "./routes/MethodePayementRoutes.js";


// sequelize.sync({alter: true});

const app = express();

app.use(cors());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(helmet());

app.use("/api/categories", categorieRouter);
app.use("/api/produits", produitRouter);
app.use("/api/commande",commandeRouter);
app.use("/api/client",clientRouter);
app.use("/api/review",reviewRouter);
app.use("/api/client",stockRouter);
app.use("/api/detailcommande",detailsCommandeRouter);
app.use("/api/methodepayement",methodepayementRouter);




const PORT = 5000;

app.listen(PORT, () => console.log(`Le serveur a bien demarre sur le port ${PORT}`));

















// const fs = require('fs');
// const path = require('path');
// const Sequelize = require('sequelize');
// const config = require('./config/connectionDB');
// const basename = path.basename(__filename);
// const db = {};

// const sequelize = config;

// fs.readdirSync(__dirname)
//   .filter(file => file !== basename && file.slice(-3) === '.js')
//   .forEach(file => {
//     const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;

// const db = require('./models');

// (async () => {
//   try {
//     await db.sequelize.sync({ alter: true }); // alter met à jour les tables sans tout effacer
//     console.log('Base de données synchronisée avec succès.');
//   } catch (error) {
//     console.error('Erreur lors de la synchronisation :', error);
//   }
// })();

// //Connection du controller client
// const express = require('express');
// const bodyParser = require('body-parser');
// const clientRoutes = require('./routes/clientRoutes');

// const app = express();

// // Middleware
// app.use(bodyParser.json());

// // Routes
// app.use('/clients', clientRoutes);

// // Lancement du serveur
// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
// });

// //Connection du controller detailscommande
// const detailsCommandeRoutes = require('./routes/detailsCommandeRoutes');

// app.use('/details-commandes', detailsCommandeRoutes);

// //Connection du controller reviews
// const reviewRoutes = require('./routes/reviewRoutes');

// app.use('/reviews', reviewRoutes);

// //Connection du controller stocks
// const StockRoutes = require('./routes/StockRoutes');

// app.use('/reviews', StockRoutes);

// //Connection du controller produits
// const ProduitsRoutes = require('./routes/ProduitsRoutes');

// app.use('/reviews', ProduitsRoutes);

// //Connection du controller methode de payement
// const methodePayementRoutes = require('./routes/methodePayementRoutes');

// app.use('/methodes-payement', methodePayementRoutes);

// //Connection du controller produitCommande
// const produitCommandeRoutes = require('./routes/produitCommandeRoutes');

// app.use('/produit-commande', produitCommandeRoutes);

