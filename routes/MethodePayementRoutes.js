// const express = require('express');
// const router = express.Router();
// const MethodePayementController = require('../controllers/MethodePayementController');

import { Router } from "express";
import { createMethodePayement, deleteMethodePayement, getMethodePayementById, getMethodesPayement, updateMethodePayement } from "../controllers/MethodePayementController.js";

// Routes pour les méthodes de paiement

const methodepayementRouter = Router();

methodepayementRouter
.post('/', createMethodePayement)
.get('/', getMethodesPayement)
.get('/:id', getMethodePayementById)
.put('/:id', updateMethodePayement)
.delete('/:id', deleteMethodePayement);

export default methodepayementRouter;