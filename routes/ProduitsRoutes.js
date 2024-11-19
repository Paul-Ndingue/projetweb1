// const express = require('express');
// const router = express.Router();
// const ProduitController = require('../controllers/ProduitController');
import { Router } from "express";
import { createProduit, deleteProduit, getProduitById, getProduits, updateProduit } from "../controllers/ProduitController.js";

const produitRouter = Router();

// Routes pour le produit
produitRouter
.post('/', createProduit)
.get('/', getProduits)
.get('/:id', getProduitById)
.put('/:id', updateProduit)
.delete('/:id', deleteProduit)
;

export default produitRouter;
