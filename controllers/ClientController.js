//const { Client } = require('..');

import { Client } from "../models/Relation.js";
  // Créer un nouveau client
  export const createClient = async (req, res) => {
    try {
      const client = await Client.create(req.body);
      res.status(201).json(client); // Retourne le client créé avec le code 201 (Created)
    } catch (error) {
      res.status(400).json({ error: 'Erreur lors de la création du client.' });
    }
  };

  // Obtenir tous les clients
  export const getClients = async(req, res) => {
    try {
      const clients = await Client.findAll();
      res.status(200).json(clients); // Retourne tous les clients
    } catch (error) {
      res.status(400).json({ error: 'Erreur lors de la récupération des clients.' });
    }
  };

  // Obtenir un client par ID
  export const getClientById = async(req, res) => {
    try {
      const client = await Client.findByPk(req.params.id);
      if (!client) return res.status(404).json({ error: 'Client non trouvé.' });
      res.status(200).json(client); // Retourne le client si trouvé
    } catch (error) {
      res.status(400).json({ error: 'Erreur lors de la récupération du client.' });
    }
  };

  // Mettre à jour un client
  export const updateClient = async (req, res) => {
    try {
      const client = await Client.findByPk(req.params.id);
      if (!client) return res.status(404).json({ error: 'Client non trouvé.' });
      await client.update(req.body);
      res.status(200).json(client); // Retourne le client mis à jour
    } catch (error) {
      res.status(400).json({ error: 'Erreur lors de la mise à jour du client.' });
    }
  };

  // Supprimer un client
  export const deleteClient = async (req, res) => {
    try {
      const client = await Client.findByPk(req.params.id);
      if (!client) return res.status(404).json({ error: 'Client non trouvé.' });
      await client.destroy();
      res.status(204).json(); // Retourne un code 204 (No Content) après suppression
    } catch (error) {
      res.status(400).json({ error: 'Erreur lors de la suppression du client.' });
    }
  };
