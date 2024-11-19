// models/Methode_Payement.js
//module.exports = (sequelize, DataTypes) => {

  import sequelize from "../config/connectionDB.js";
  import { DataTypes } from "sequelize";
    const Methode_Payement = sequelize.define('Methode_Payement', {
      // ID_Payement: {
      //   type: DataTypes.INTEGER,
      //   primaryKey: true,
      //   autoIncrement: true,};
   
      Date_Payement: DataTypes.DATE,
      Montant: DataTypes.INTEGER,
    });
  
    // Methode_Payement.associate = models => {
    //   Methode_Payement.hasMany(models.Commande, {
    //     foreignKey: 'ID_Payement',
    //   });
    // };
  
    export default Methode_Payement;