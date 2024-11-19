import { Sequelize } from "sequelize";

// Configuration de la connexion à la base de données
const sequelize = new Sequelize('magasin_en_ligne', 'root', '', {
  host: 'localhost', // Adresse du serveur MySQL
  dialect: 'mysql',  // Type de base de données
});

export default sequelize;