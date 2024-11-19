//const { Stock, Produit } = require('..');

import {Stock} from "../models/Relation.js";  // Créer un nouvel enregistrement de stock

export const createStock = async (req, res) => {
    try {
      const stock = await Stock.create(req.body);
      res.status(201).json(stock);
    } catch (error) {
      res.status(400).json({ error: 'Erreur lors de la création du stock.' });
    }
  };

  // Obtenir toutes les entrées de stock
  export const getStocks = async (req, res) => {
    try {
      const stocks = await Stock.findAll({ include: [Produit] });
      res.status(200).json(stocks);
    } catch (error) {
      res.status(400).json({ error: 'Erreur lors de la récupération des stocks.' });
    }
  };

  // Obtenir un stock par ID
  export const getStockById = async (req, res) => {
    try {
      const stock = await Stock.findByPk(req.params.id, { include: [Produit] });
      if (!stock) return res.status(404).json({ error: 'Stock non trouvé.' });
      res.status(200).json(stock);
    } catch (error) {
      res.status(400).json({ error: 'Erreur lors de la récupération du stock.' });
    }
  };

  // Mettre à jour une entrée de stock
  export const updateStock = async (req, res) => {
    try {
      const stock = await Stock.findByPk(req.params.id);
      if (!stock) return res.status(404).json({ error: 'Stock non trouvé.' });
      await stock.update(req.body);
      res.status(200).json(stock);
    } catch (error) {
      res.status(400).json({ error: 'Erreur lors de la mise à jour du stock.' });
    }
  };

  // Supprimer une entrée de stock
  export const deleteStock = async (req, res) => {
    try {
      const stock = await Stock.findByPk(req.params.id);
      if (!stock) return res.status(404).json({ error: 'Stock non trouvé.' });
      await stock.destroy();
      res.status(204).json();
    } catch (error) {
      res.status(400).json({ error: 'Erreur lors de la suppression du stock.' });
    }
  };
