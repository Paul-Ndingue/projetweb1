const sequelize = require('./connectionDB'); // Assure-toi que le chemin est correct

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connexion réussie à la base de données !');
  } catch (error) {
    console.error('Impossible de se connecter :', error);
  }
})();
