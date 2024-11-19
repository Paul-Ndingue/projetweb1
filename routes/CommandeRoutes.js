// const express = require('express');
// const router = express.Router();
// const CommandeController = require('../controllers/CommandeController');

import { Router } from "express";
import {  createCommande, deleteCommande, getCommandeById, getCommandes, updateCommande} from "../controllers/CommandeController.js";

const commandeRouter = Router();

// Routes pour la commande
commandeRouter
.post('/', createCommande)
.get('/', getCommandes)
.get('/:id',getCommandeById)
.put('/:id', updateCommande)
.delete('/:id', deleteCommande);

export default commandeRouter;