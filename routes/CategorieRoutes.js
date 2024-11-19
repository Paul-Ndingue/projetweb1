// const express = require('express');
// const router = express.Router();
// const CategorieController = require('../controllers/CategorieController');

import { Router } from "express";
import { createCategorie, deleteCategorie, getCategorieById, getCategories, updateCategorie } from "../controllers/CategorieController.js";

const categorieRouter = Router();

// Routes pour la catégorie
categorieRouter
.post('/', createCategorie)
.get('/', getCategories)
.get('/:id', getCategorieById)
.put('/:id', updateCategorie)
.delete('/:id', deleteCategorie);

export default categorieRouter;
