// models/Commande.js
//module.exports = (sequelize, DataTypes) => {

  import sequelize from "../config/connectionDB.js";
  import { DataTypes } from "sequelize";

    const Commande = sequelize.define('Commande', {
      // ID_Commande: {
      //   type: DataTypes.INTEGER,
      //   primaryKey: true,
      //   autoIncrement: true,
      //},
      Description: DataTypes.STRING,
      Date_Commande: DataTypes.DATE,
      Date_Livraison: DataTypes.DATE,
      Statut: DataTypes.STRING,
      Prix: DataTypes.INTEGER,
    });
  
    // Commande.associate = models => {
    //   Commande.belongsTo(models.Client, {
    //     foreignKey: 'ID_Client',
    //   });
    //   Commande.belongsToMany(models.Produit, {
    //     through: 'Produit_Commande',
    //     foreignKey: 'ID_Commande',
    //   });
    //   Commande.hasMany(models.Details_Commande, {
    //     foreignKey: 'ID_Commande',
    //   });
    // };
  
    export default Commande;