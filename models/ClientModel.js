// models/Client.js
// module.exports = (sequelize, DataTypes) => {

import sequelize from "../config/connectionDB.js";
import { DataTypes } from "sequelize";

    const Client = sequelize.define('Client', {
      // ID_Client: {
      //   type: DataTypes.INTEGER,
      //   primaryKey: true,
      //   autoIncrement: true,
      Nom: DataTypes.STRING,
      Prenom: DataTypes.STRING,
      Adresse: DataTypes.STRING,
      Telephone: DataTypes.INTEGER,
      Email: DataTypes.STRING,
    });
  
    // Client.associate = models => {
    //   Client.hasMany(models.Commande, {
    //     foreignKey: 'ID_Client',
    //   });
    // };
  
   export default Client;