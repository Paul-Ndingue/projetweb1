// models/Details_Commande.js
// module.exports = (sequelize, DataTypes) => {
  import sequelize from "../config/connectionDB.js";
  import { DataTypes } from "sequelize";


    const Details_Commande = sequelize.define('Details_Commande', {
      // ID_Details: {
      //   type: DataTypes.INTEGER,
      //   primaryKey: true,
      //   autoIncrement: true,
      // },
    });
  
    // Details_Commande.associate = models => {
    //   Details_Commande.belongsTo(models.Commande, {
    //     foreignKey: 'ID_Commande',
    //   });
   // };
  
  export default Details_Commande;