// const express = require('express');
// const router = express.Router();
// const ClientController = require('../controllers/ClientController');

import { Router } from "express";
import { createClient, deleteClient, getClientById, getClients, updateClient } from "../controllers/ClientController.js";


// Routes pour le client
const clientRouter = Router();

clientRouter
.post('/',createClient)
.get('/',getClients)
.get('/:id', getClientById)
.put('/:id', updateClient)
.delete('/:id', deleteClient);

export default clientRouter;
