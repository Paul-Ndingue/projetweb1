// const express = require('express');
// const router = express.Router();
// const StockController = require('../controllers/StockController');

import { Router } from "express";
import { createStock, deleteStock, getStockById, getStocks, updateStock } from "../controllers/StockController.js";

// Routes pour le stock

const stockRouter = Router();

stockRouter
.post('/', createStock)
.get('/', getStocks)
.get('/:id', getStockById)
.put('/:id', updateStock)
.delete('/:id', deleteStock);

export default stockRouter;