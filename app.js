// Registre des opérations maraîchères — point d'entrée : le menu.
// À vous d'écrire tout le menu : accueil, chargement des données, menu affiché avant chaque choix,
// actions, sortie et gestion des erreurs. Comportement et textes imposés : fiches/3-ajouter-lister.md.
// Lancer : node app.js
import { demander, fermerSaisie, ouvrirSaisie } from './src/saisie.js';
import { chargerJson, enregistrerJson } from './src/stockage.js';
import { OPERATIONS, ajouterOperation, formaterOperation, listerOperations, trouverParId } from './src/registre.js';
import { filtrerParCulture, filtrerParParcelle, trierParCout, trierParDate } from './src/recherche.js';
import { coutMinMax, syntheseParParcelle, totalCouts } from './src/synthese.js';

const FICHIER_DONNEES = 'donnees/operations.json';
// accueil
function afficherAccueil(){
  console.log("==================================================")
  console.log("     REGISTRE DES OPERATIONS MARAICHERES          ")
  console.log("     Exploitation Maraichere pedagodique          ")
  console.log("==================================================")
}
function afficherMenu(){
  console.log("--------------------- MENU ---------------------")
  console.log("")
  console.log("1. Ajouter une opération")
  console.log("2. Lister les opérations")
  console.log("3. Rechercher (identifiant, parcelle, culture)")
  console.log("Trier (coût, date)")
  console.log("Synthèse des dépenses")
  console.log("0. Quitter")
}

// chargement des donnees
async function chargerRegistre(){
try {
  const operation = await chargerJson(FICHIER_DONNEES);
  console.log(`${operations.length} operations(s) chrgee(s) depuis ${FICHIER_DONNEES}.`);
  return operations;
} catch (error) {
  console.log(`Impossible de lire ${FICHIER_DONNEES}:${erreur.message}.Le registre demarre vide.`)
  return []
}
}
async function main() {
  ouvrirSaisie();
  console.log("À compléter : écrivez le menu dans app.js (fiches/3-ajouter-lister.md).");
  fermerSaisie();
}

main();
