import {Categorie, Produit} from "../models/Relation.js";

// module.exports = {
  // Créer un nouveau produit
   export const createProduit = async(req, res) => {
    try {
      const produit = await Produit.create(req.body);
      res.status(201).json(produit);
    } catch (error) {
      res.status(400).json({ error: 'Erreur lors de la création du produit.' });
    }
  };

  // Obtenir tous les produits
  export const getProduits = async(req, res) => {
    try {
      // const produits = await Produit.findAll({ include: [Categorie, Stock] });
      const produits = await Produit.findAll();
      res.status(200).json(produits); // Inclut les catégories et le stock
    } catch (error) {
      res.status(400).json({ error: 'Erreur lors de la récupération des produits.' });
    }
  };

  // Obtenir un produit par ID
  export const getProduitById = async (req, res) => {
    try {
      //const produit = await Produit.findByPk(req.params.id, { include: [Categorie, Stock] });
      const produit = await Produit.findByPk(req.params.id, {include: Categorie});
      // const produit = await Produit.findByPk(req.params.id, {include: Categorie});
      if (!produit) return res.status(404).json({ error: 'Produit non trouvé.' });
      res.status(200).json(produit);
    } catch (error) {
      res.status(400).json({ error: 'Erreur lors de la récupération du produit.' });
    }
  };

  // Mettre à jour un produit
  export const updateProduit = async (req, res) => {
    try {
      const produit = await Produit.findByPk(req.params.id);
      if (!produit) return res.status(404).json({ error: 'Produit non trouvé.' });
      await produit.update(req.body);
      res.status(200).json(produit);
    } catch (error) {
      res.status(400).json({ error: 'Erreur lors de la mise à jour du produit.' });
    }
  };

  // Supprimer un produit
  export const deleteProduit = async (req, res) => {
    try {
      const produit = await Produit.findByPk(req.params.id);
      if (!produit) return res.status(404).json({ error: 'Produit non trouvé.' });
      await produit.destroy();
      res.status(204).json();
    } catch (error) {
      res.status(400).json({ error: 'Erreur lors de la suppression du produit.' });
    }
  };

  export const addCagorieToProduit = async (req, res) => {
      // const {id: idProduit} = req.params;
      const idProduit = req.params.id;
      const {id: idCategorie } = req.body;

      try {
        const produit = await Produit.findByPk(idProduit);
        const categorie = await Categorie.findByPk(idCategorie);
        await produit.setCategorie(categorie);
        // produit.setCategorie(categorie);
        // Produit.setCategorie(categorie, {where: id});
        res.status(200).json({data: produit});
      } catch (error) {
        res.status(400).json({message: error.message});
      }
  }
// };
