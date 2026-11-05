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
  console.log("4. Trier (coût, date)")
  console.log("5.Synthèse des dépenses")
  console.log('6. Supprimer une opération');
  console.log("0. Quitter")
}

// chargement des donnees
async function chargerRegistre(){
try {
  const operations = await chargerJson(FICHIER_DONNEES);
  console.log(`${operations.length} operations(s) chrgee(s) depuis ${FICHIER_DONNEES}.`);
  return operations;
} catch (error) {
  console.log(`Impossible de lire ${FICHIER_DONNEES}:${erreur.message}.Le registre demarre vide.`)
  return []
}
}

//choix 1:Ajouter une opération
async function ajouter(operations){
  console.log('--- Ajouter une opération ---');
  const id = await demander('Identifiant(ex. O11) : ');
  if(id === null) return;
  const date = await demander('Date (AAAA-MM-JJ) : ');
  if(date === null) return;
  const parcelle = await demander('Parcelle (ex. P1) : ');
  if(parcelle === null) return;
  const culture = await demander('Culture (ex. tomate) : ');
  if(culture === null) return;
  const operation = await demander(`operation (${OPERATIONS.join(', ')}) : `);
  if(operation === null) return;
  const cout = await demander('Coût en FCFA : ');
  if (cout === null) return;

  const saisie = {
    id: id.toUpperCase(),
    date,
    parcelle: parcelle.toUpperCase(),
    culture: culture.toLowerCase(),
    operation: operation.toLowerCase(),
    coutFCFA: cout,
  };

  const erreurs = ajouterOperation(operations, saisie);
  if( erreurs.length === 0){
    await enregistrerJson(FICHIER_DONNEES, operations);
    console.log(`operation ${saisie.id} ajoutee. Le registre compte ${operation.length} operation(s).`)
  } else {
    console.log('Opération refusée :');
    for(const erreurs of erreur){
    console.log(` - ${erreur}`);
    }
  console.log(`le registre compte toujours ${operatoions.length} operation(s).`)
  }
}
// choix 2: lister les operations
async function lister(operations) {
 console.log(`--- Liste des opérations ${operations.length} ---`);
  console.log(listerOperations(operations));
}
// choix 3 : rechercher de ID, parcelle et cullture
async function rechercher(operations) {
  console.log('--- Rechercher ---');
  console.log('1. Par identifiant');
  console.log('2. Par parcelle');
  console.log('3. Les opérations d\'une culture');
  const sousChoix = await demander('Votre choix : ');
  if (sousChoix === null) return;

  if (sousChoix === '1') {
    const id = await demander('Identifiant : ');
    if (id === null) return;
    const identifiant = id.toUpperCase();
    const operation = trouverParId(operations, identifiant);
    console.log(operation === undefined ? `Opération ${identifiant} introuvable.` : formaterOperation(operation));
  } else if (sousChoix === '2') {
    const saisie = await demander('Parcelle : ');
    if (saisie === null) return;
    const parcelle = saisie.toUpperCase();
    const trouvees = filtrerParParcelle(operations, parcelle);
    console.log(`${trouvees.length} opération(s) sur la parcelle ${parcelle} :`);
    console.log(listerOperations(trouvees));
  } else if (sousChoix === '3') {
    const saisie = await demander('Culture : ');
    if (saisie === null) return;
    const culture = saisie.toLowerCase();
    const trouvees = filtrerParCulture(operations, culture);
    console.log(`${trouvees.length} opération(s) pour la culture ${culture} :`);
    console.log(listerOperations(trouvees));
  } else {
    console.log('Choix inconnu : retour au menu.');
  }
}
// choix 4 : trier par cout et pâr date 
async function trier(operations) {
  console.log('--- Trier ---');
  console.log('1. Par coût croissant');
  console.log('2. Par date, de la plus ancienne à la plus récente');
  console.log('3. Par coût décroissant');
  const sousChoix = await demander('Votre choix : ');
  if (sousChoix === null) return;

  if (sousChoix === '1') {
    console.log(listerOperations(trierParCout(operations)));
  } else if (sousChoix === '2') {
    console.log(listerOperations(trierParDate(operations)));
  } else if (sousChoix === '3') {
    console.log(listerOperations(trierParCoutDecroissant(operations)));
  } else {
    console.log('Choix inconnu : retour au menu.');
  }
}
// choix 5 : synthese 
function synthese(operations) {
  console.log('--- Synthèse des dépenses enregistrées ---');
  console.log(`Nombre d'opérations : ${operations.length}`);
  console.log(`Total des coûts : ${totalCouts(operations)} FCFA`);
  console.log('Par parcelle :');
  for (const [parcelle, valeurs] of Object.entries(syntheseParParcelle(operations))) {
    console.log(`  ${parcelle} : ${valeurs.nombre} opération(s), ${valeurs.total} FCFA`);
  }
  const extremes = coutMinMax(operations);
  if (extremes === null) {
    console.log('Coût minimum et maximum : aucune donnée');
  } else {
    console.log(`Coût minimum : ${extremes.min} FCFA · Coût maximum : ${extremes.max} FCFA`);
  }
  const plusCouteuse = parcelleLaPlusCouteuse(operations);
  if (plusCouteuse !== null) {
    console.log(`Parcelle la plus coûteuse : ${plusCouteuse.parcelle} (${plusCouteuse.total} FCFA)`);
  }
  console.log('Rappel : ce sont des dépenses. Sans les revenus, elles ne mesurent pas la rentabilité.');
}
// choix 6 : supprimer une operation
async function supprimer(operations) {
  const saisie = await demander('Identifiant : ');
  if (saisie === null) return;
  const id = saisie.toUpperCase();
  const Supprimee = supprimerOperation(operations, id);
  if (supprimee === undefined) {
    console.log(`Opération ${id} introuvable.`);
    return;
  }
  await enregistrerJson(FICHIER_DONNEES, operations);
  console.log(`Opération ${id} supprimée. Le registre compte ${operations.length} opération(s).`);
}

async function main() {
  ouvrirSaisie();
  afficherAccueil();
  const operations = await chargerRegistre();
  let continuer = true;
  while(continuer){
    afficherMenu();
    const choix = await demander('Votre choix: ');
    if (choix === null){
      break;
    }
    try {
      switch (choix.trim()) {
        case '1':
          await ajouter(operations)
          break;
        case '2':
          lister(operations)
          break;
        case '3':
          await rechercher(operations)
          break;
        case '4':
          await trier(operations)
          break;
        case '5':
          synthese(operations)
          break;
        case '6':
          await supprimer(operations)
          break;
        case '0':
          console.log('Au revoir !');
          continuer = false
          break     
        default:
          console.log(`choix inconnu :  «${choix}». Tapez un chiffre du menu.`);
      }
    } catch (erreur) {
      if(erreur.message) {
        console.log(`A completer: ${erreur.message}`);
      }else{
        console.log(`Erreur inattendu : ${erreur.message || erreur}`)
      }
      
    }
  }
  fermerSaisie();
}

main();
