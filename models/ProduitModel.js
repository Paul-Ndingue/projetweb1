// models/Produit.js
import sequelize from "../config/connectionDB.js";
import { DataTypes } from "sequelize";

// module.exports = (sequelize, DataTypes) => {
    const Produit = sequelize.define('Produit', {
      // ID_Produit: {
      //   type: DataTypes.INTEGER,
      //   primaryKey: true,
      //   autoIncrement: true,
      // },
      Nom: DataTypes.STRING,
      Description: DataTypes.TEXT,
      Prix: DataTypes.INTEGER,
      Quantite: DataTypes.INTEGER,
    });
  
    // Produit.associate = models => {
    //   Produit.belongsTo(models.Categorie, {
    //     foreignKey: 'ID_Categorie',
    //   });
    //   Produit.belongsToMany(models.Commande, {
    //     through: 'Produit_Commande',
    //     foreignKey: 'ID_Produit',
    //   });
    //   Produit.hasMany(models.Stock, {
    //     foreignKey: 'ID_Produit',
    //   });
    //   Produit.hasMany(models.Review, {
    //     foreignKey: 'ID_Produit',
    //   });
    // };
  
    export default Produit;
  // };
  