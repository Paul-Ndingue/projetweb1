// models/Stock.js
//module.exports = (sequelize, DataTypes) => {

  import sequelize from "../config/connectionDB.js";
  import { DataTypes } from "sequelize";

    const Stock = sequelize.define('Stock', {
      // ID_Stock: {
      //   type: DataTypes.INTEGER,
      //   primaryKey: true,
      //   autoIncrement: true,
      // },
      Date: DataTypes.DATE,
    });
  
    // Stock.associate = models => {
    //   Stock.belongsTo(models.Produit, {
    //     foreignKey: 'ID_Produit',
    //   });
    // };
  
    export default Stock;
  