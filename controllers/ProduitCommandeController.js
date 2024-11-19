// const { Produit_Commande, Produit, Commande } = require('..');

// module.exports = {
//   // Créer une nouvelle entrée dans la table de liaison Produit_Commande
//   async createProduitCommande(req, res) {
//     try {
//       const produitCommande = await Produit_Commande.create(req.body);
//       res.status(201).json(produitCommande);
//     } catch (error) {
//       res.status(400).json({ error: 'Erreur lors de l\'ajout du produit à la commande.' });
//     }
//   },

//   // Obtenir tous les produits associés à une commande
//   async getProduitsByCommande(req, res) {
//     try {
//       const produits = await Produit_Commande.findAll({
//         where: { ID_Commande: req.params.commandeId },
//         include: [Produit]
//       });
//       res.status(200).json(produits);
//     } catch (error) {
//       res.status(400).json({ error: 'Erreur lors de la récupération des produits de la commande.' });
//     }
//   },

//   // Obtenir toutes les commandes associées à un produit
//   async getCommandesByProduit(req, res) {
//     try {
//       const commandes = await Produit_Commande.findAll({
//         where: { ID_Produit: req.params.produitId },
//         include: [Commande]
//       });
//       res.status(200).json(commandes);
//     } catch (error) {
//       res.status(400).json({ error: 'Erreur lors de la récupération des commandes du produit.' });
//     }
//   },

//   // Supprimer une association produit-commande
//   async deleteProduitCommande(req, res) {
//     try {
//       const produitCommande = await Produit_Commande.findOne({
//         where: {
//           ID_Commande: req.params.commandeId,
//           ID_Produit: req.params.produitId
//         }
//       });
//       if (!produitCommande) return res.status(404).json({ error: 'Association produit-commande non trouvée.' });
//       await produitCommande.destroy();
//       res.status(204).json();
//     } catch (error) {
//       res.status(400).json({ error: 'Erreur lors de la suppression de l\'association produit-commande.' });
//     }
//   },
// };
