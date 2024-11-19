//const { Review, Produit } = require('..');

import {Review} from '../models/Relation.js';  // Créer un nouvel avis pour un produit
  
export const createReview = async (req, res) => {
    try {
      const review = await Review.create(req.body);
      res.status(201).json(review); // Retourne l'avis créé
    } catch (error) {
      res.status(400).json({ error: 'Erreur lors de la création de l\'avis.' });
    }
  };

  // Obtenir tous les avis
  export const getReviews = async (req, res) => {
    try {
      // const reviews = await Review.findAll({ include: [Produit] });
      const reviews = await Review.findAll();
      res.status(200).json(reviews); // Inclut le produit associé
    } catch (error) {
      res.status(400).json({ error: 'Erreur lors de la récupération des avis.' });
    }
  };

  // Obtenir un avis par ID
  export const getReviewById = async (req, res) => {
    try {
      //const review = await Review.findByPk(req.params.id, { include: [] });
      const review = await Review.findByPk(req.params.id );
      if (!review) return res.status(404).json({ error: 'Avis non trouvé.' });
      res.status(200).json(review);
    } catch (error) {
      res.status(400).json({ error: 'Erreur lors de la récupération de l\'avis.' });
    }
  };

  // Mettre à jour un avis
  export const updateReview = async (req, res) => {
    try {
      const review = await Review.findByPk(req.params.id);
      if (!review) return res.status(404).json({ error: 'Avis non trouvé.' });
      await review.update(req.body);
      res.status(200).json(review);
    } catch (error) {
      res.status(400).json({ error: 'Erreur lors de la mise à jour de l\'avis.' });
    }
  };

  // Supprimer un avis
  export const deleteReview = async (req, res) =>{
    try {
      const review = await Review.findByPk(req.params.id);
      if (!review) return res.status(404).json({ error: 'Avis non trouvé.' });
      await review.destroy();
      res.status(204).json();
    } catch (error) {
      res.status(400).json({ error: 'Erreur lors de la suppression de l\'avis.' });
    }
  };
