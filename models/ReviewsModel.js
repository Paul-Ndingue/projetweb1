// models/Review.js
// module.exports = (sequelize, DataTypes) => {

  import sequelize from "../config/connectionDB.js";
  import { DataTypes } from "sequelize";

    const Review = sequelize.define('Review', {
      // ID_Reviews: {
      //   type: DataTypes.INTEGER,
      //   primaryKey: true,
      //   autoIncrement: true,
      //},
      Commentaire: DataTypes.TEXT,
      Note: DataTypes.STRING,
      Date: DataTypes.DATE,
    });
  
    // Review.associate = models => {
    //   Review.belongsTo(models.Produit, {
    //     foreignKey: 'ID_Produit',
    //   });
    // };
  
    export default Review;

  