//const { Methode_Payement } = require('..');

import {Methode_Payement} from '../models/Relation.js';

  // Créer une nouvelle méthode de paiement
  export const createMethodePayement = async (req, res) => {
    try {
      const methodePayement = await Methode_Payement.create(req.body);
      res.status(201).json(methodePayement); // Retourne la méthode de paiement créée
    } catch (error) {
      res.status(400).json({ error: 'Erreur lors de la création de la méthode de paiement.' });
    }
  };

  // Obtenir toutes les méthodes de paiement
  export const getMethodesPayement = async (req, res) => {
    try {
      const methodesPayement = await Methode_Payement.findAll();
      res.status(200).json(methodesPayement); // Retourne toutes les méthodes de paiement
    } catch (error) {
      res.status(400).json({ error: 'Erreur lors de la récupération des méthodes de paiement.' });
    }
  }

  // Obtenir une méthode de paiement par ID
  export const getMethodePayementById = async (req, res) => {
    try {
      const methodePayement = await Methode_Payement.findByPk(req.params.id);
      if (!methodePayement) return res.status(404).json({ error: 'Méthode de paiement non trouvée.' });
      res.status(200).json(methodePayement);
    } catch (error) {
      res.status(400).json({ error: 'Erreur lors de la récupération de la méthode de paiement.' });
    }
  };

  // Mettre à jour une méthode de paiement
  export const updateMethodePayement = async (req, res)  => {
    try {
      const methodePayement = await Methode_Payement.findByPk(req.params.id);
      if (!methodePayement) return res.status(404).json({ error: 'Méthode de paiement non trouvée.' });
      await methodePayement.update(req.body);
      res.status(200).json(methodePayement);
    } catch (error) {
      res.status(400).json({ error: 'Erreur lors de la mise à jour de la méthode de paiement.' });
    }
  };

  // Supprimer une méthode de paiement
  export const deleteMethodePayement = async (req, res) => {
    try {
      const methodePayement = await Methode_Payement.findByPk(req.params.id);
      if (!methodePayement) return res.status(404).json({ error: 'Méthode de paiement non trouvée.' });
      await methodePayement.destroy();
      res.status(204).json();
    } catch (error) {
      res.status(400).json({ error: 'Erreur lors de la suppression de la méthode de paiement.' });
    }
  };
