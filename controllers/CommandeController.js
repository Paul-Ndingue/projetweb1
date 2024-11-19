//const { Commande, Produit, Produit_Commande } = require('../models');

import {Commande} from "../models/Relation.js";  // Créer une nouvelle commande

  export const createCommande = async (req, res) => {
    try {
      const commande = await Commande.create(req.body);
      res.status(201).json(commande);
    } catch (error) {
      res.status(400).json({ error: 'Erreur lors de la création de la commande.' });
    }
  };

  // Obtenir toutes les commandes
  export const getCommandes = async (req, res) => {
    try {
      //const commandes = await Commande.findAll({ include: [Produit] });
      const commandes = await Commande.findAll();
      res.status(200).json(commandes); // Inclut les produits dans la réponse
    } catch (error) {
      res.status(400).json({ error: 'Erreur lors de la récupération des commandes.' });
    }
  };

  // Obtenir une commande par ID
  export const getCommandeById = async (req, res) => {
    try {
      //const commande = await Commande.findByPk(req.params.id, { include: [Produit] });
      const commande = await Commande.findByPk(req.params.id);
      if (!commande) return res.status(404).json({ error: 'Commande non trouvée.' });
      res.status(200).json(commande);
    } catch (error) {
      res.status(400).json({ error: 'Erreur lors de la récupération de la commande.' });
    }
  };

  // Mettre à jour une commande
  export const updateCommande = async (req, res) => {
    try {
      const commande = await Commande.findByPk(req.params.id);
      if (!commande) return res.status(404).json({ error: 'Commande non trouvée.' });
      await commande.update(req.body);
      res.status(200).json(commande);
    } catch (error) {
      res.status(400).json({ error: 'Erreur lors de la mise à jour de la commande.' });
    }
  };

  // Supprimer une commande
  export const deleteCommande = async (req, res) => {
    try {
      const commande = await Commande.findByPk(req.params.id);
      if (!commande) return res.status(404).json({ error: 'Commande non trouvée.' });
      await commande.destroy();
      res.status(204).json();
    } catch (error) {
      res.status(400).json({ error: 'Erreur lors de la suppression de la commande.' });
    }};