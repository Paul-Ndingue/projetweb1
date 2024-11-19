//const { Details_Commande, Commande } = require('../models');

import {Details_Commande} from '../models/Relation.js';  // Créer un nouveau détail de commande

  export const createDetailsCommande = async (req, res) => {
    try {
      const detailsCommande = await Details_Commande.create(req.body);
      res.status(201).json(detailsCommande);
    } catch (error) {
      res.status(400).json({ error: 'Erreur lors de la création du détail de commande.' });
    }
  };

  // Obtenir tous les détails de commande
  export const getDetailsCommandes = async (req, res) => {
    try {
      const detailsCommandes = await Details_Commande.findAll({ include: [Commande] });
      res.status(200).json(detailsCommandes);
    } catch (error) {
      res.status(400).json({ error: 'Erreur lors de la récupération des détails de commande.' });
    }
  };

  // Obtenir un détail de commande par ID
  export const getDetailsCommandeById = async (req, res) => {
    try {
      const detailsCommande = await Details_Commande.findByPk(req.params.id, { include: [Commande] });
      if (!detailsCommande) return res.status(404).json({ error: 'Détail de commande non trouvé.' });
      res.status(200).json(detailsCommande);
    } catch (error) {
      res.status(400).json({ error: 'Erreur lors de la récupération du détail de commande.' });
    }
  };

  // Mettre à jour un détail de commande
  export const updateDetailsCommande = async (req, res) => {
    try {
      const detailsCommande = await Details_Commande.findByPk(req.params.id);
      if (!detailsCommande) return res.status(404).json({ error: 'Détail de commande non trouvé.' });
      await detailsCommande.update(req.body);
      res.status(200).json(detailsCommande);
    } catch (error) {
      res.status(400).json({ error: 'Erreur lors de la mise à jour du détail de commande.' });
    }
  };

  // Supprimer un détail de commande
  export const deleteDetailsCommande = async (req, res) => {
    try {
      const detailsCommande = await Details_Commande.findByPk(req.params.id);
      if (!detailsCommande) return res.status(404).json({ error: 'Détail de commande non trouvé.' });
      await detailsCommande.destroy();
      res.status(204).json();
    } catch (error) {
      res.status(400).json({ error: 'Erreur lors de la suppression du détail de commande.' });
    }
  };
