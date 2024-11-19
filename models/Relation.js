import Categorie from "./CategorieModel.js";
import Client from "./ClientModel.js";
import Commande from "./CommandeModel.js";
import Details_Commande from "./DetailCommandeModel.js";
import Methode_Payement from "./MethodePaiementModel.js";
import Produit from "./ProduitModel.js";
import Review from "./ReviewsModel.js";
import Stock from "./StockModel.js";

Categorie.hasMany(Produit);
Produit.belongsTo(Categorie);

Stock.hasMany(Produit);
Produit.belongsTo(Stock);

Produit.hasMany(Review);
Review.belongsTo(Produit);

Client.hasMany(Review);
Review.belongsTo(Client);

Client.hasMany(Commande);
Commande.belongsTo(Client);

Commande.hasMany(Methode_Payement);
Methode_Payement.belongsTo(Commande);


 Commande.belongsToMany(Produit, {
     through: "commande_produit"
 });
    Produit.belongsToMany(Commande, {
     through: "commande_produit"
 });




export {Categorie, Produit, Commande, Client, Review,Details_Commande,Stock,Methode_Payement};
