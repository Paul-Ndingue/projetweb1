const Utilisateur = require('../models/utilisateur');

// Créer un nouvel utilisateur
exports.creerUtilisateur = async (req, res) => {
  try {
    const utilisateur = new Utilisateur(req.body);
    await utilisateur.save();
    res.status(201).send(utilisateur);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Récupérer tous les utilisateurs
exports.getUtilisateurs = async (req, res) => {
  try {
    const utilisateurs = await Utilisateur.find();
    res.send(utilisateurs);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Récupérer un utilisateur par ID
exports.getUtilisateurById = async (req, res) => {
  try {
    const utilisateur = await Utilisateur.findById(req.params.id);
    if (!utilisateur) return res.status(404).send();
    res.send(utilisateur);
  } catch (error) {
    res.status(500).send(error);
  }
};/// eeeeeeeeeeeeeeeeeeeeeeeeeeeeee

// Mettre à jour un utilisateur
exports.updateUtilisateur = async (req, res) => {
  try {
    const utilisateur = await Utilisateur.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!utilisateur) return res.status(404).send();
    res.send(utilisateur);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Supprimer un utilisateur
exports.deleteUtilisateur = async (req, res) => {
  try {
    const utilisateur = await Utilisateur.findByIdAndDelete(req.params.id);
    if (!utilisateur) return res.status(404).send();
    res.send(utilisateur);
  } catch (error) {
    res.status(500).send(error);
  }
};
