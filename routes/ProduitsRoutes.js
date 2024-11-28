// const express = require('express');
// const router = express.Router();
// const ProduitController = require('../controllers/ProduitController');
import { Router } from "express";
import { addCagorieToProduit, createProduit, deleteProduit, getProduitById, getProduits, updateProduit } from "../controllers/ProduitController.js";

const produitRouter = Router();

// Routes pour le produit
produitRouter
.post('/', createProduit)
.get('/', getProduits)
.get('/:id', getProduitById)
.put('/:id', updateProduit)
.delete('/:id', deleteProduit)
.put('/set/:id', addCagorieToProduit);

export default produitRouter;
