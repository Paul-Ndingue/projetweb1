// const express = require('express');
// const router = express.Router();
// const DetailsCommandeController = require('../controllers/DetailsCommandeController');

import { Router } from "express";
import { createDetailsCommande, deleteDetailsCommande, getDetailsCommandeById, getDetailsCommandes, updateDetailsCommande } from "../controllers/DetailsCommandeController.js";

// Routes pour les détails de commande
const detailsCommandeRouter = Router();

detailsCommandeRouter
.post('/', createDetailsCommande)
.get('/', getDetailsCommandes)
.get('/:id', getDetailsCommandeById)
.put('/:id', updateDetailsCommande)
.delete('/:id', deleteDetailsCommande);

export default detailsCommandeRouter;