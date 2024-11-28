// models/Categorie.js
import sequelize from "../config/connectionDB.js";
import { DataTypes } from "sequelize";

// module.exports = (sequelize, DataTypes) => {
  const Categorie = sequelize.define('Categorie', {
    // ID_Categorie: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    //   autoIncrement: true,
    // },
    Nom: DataTypes.STRING,
    Description: DataTypes.TEXT,
  });

  // Categorie.associate = models => {
  //   Categorie.hasMany(models.Produit, {
  //     foreignKey: 'ID_Categorie',
  //   });
  // };
  //admettons que c'est une essai

  export default Categorie;
// };
