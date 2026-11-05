# Registre des opérations maraîchères

> Projet individuel du SAS DFS, brief 1 (sujet : [SUJET.md](SUJET.md)). Remplacez chaque ✏️ par votre texte, puis supprimez cette ligne.

## Contexte

La responsable d'une exploitation maraîchère pédagogique note ses opérations (semis, repiquage, arrosage, désherbage, récolte) dans un carnet papier, ce qui provoque des oublis de suivi. Mon outil lui permet de saisir ces opérations dans un terminal : identifiant, date, parcelle, culture, type d'opération et coût en FCFA. Elle peut ensuite lister les opérations, en retrouver une par son identifiant, filtrer par parcelle ou par culture, trier par coût ou par date, et obtenir une synthèse : total des dépenses, nombre et total par parcelle, coût minimum et maximum. Les données sont enregistrées dans `donnees/operations.json` et retrouvées au prochain lancement. Le **coût enregistré** est une dépense ; l'outil ne contient ni **revenus** ni quantités récoltées, il ne peut donc pas calculer la **rentabilité** d'une parcelle ou d'une culture. Il ne donne aucun conseil de culture.

## Prérequis et lancement

- Node.js 20 ou plus récent, Git ; aucune bibliothèque à installer.

```bash
git clone https://github.com/VOTRE-COMPTE/brief-1-registre-maraicher.git
cd brief-1-registre-maraicher
node app.js
npm test
```

Sous PowerShell, si `npm` est bloqué : `npm.cmd test`.

## Fonctionnalités

- [x] Données lues et enregistrées dans `donnees/operations.json`
- [x] Ajouter une opération, saisies invalides refusées sans arrêter le programme
- [x] Lister les opérations, message si le registre est vide
- [x] Rechercher par identifiant ou par parcelle ; filtrer par culture
- [x] Trier par coût ou par date
- [x] Synthèse : total, nombre et total par parcelle, coût minimum et maximum
- [x] Bonus : supprimer et modifier une opération (choix 6 et 7)
- [x] Bonus : tri par coût décroissant, parcelle la plus coûteuse


## Données

Le fichier `donnees/operations.json` contient 10 opérations de départ, sur trois parcelles (P1, P2, P3) et trois cultures (tomate, gombo, aubergine). Chaque opération a six champs : `id`, `date` (AAAA-MM-JJ), `parcelle`, `culture`, `operation` (parmi cinq valeurs) et `coutFCFA` (nombre positif ou nul, en FCFA) : voir [docs/dictionnaire-donnees.md](docs/dictionnaire-donnees.md). **Ces données sont fictives.**

## Limites

- Le registre enregistre des **dépenses**, pas les revenus ni les quantités récoltées : il ne mesure pas la rentabilité.
- Le programme ne contrôle pas la cohérence entre parcelle et culture : `P1` avec `gombo` est accepté.
- Aucun contrôle de cohérence entre la date et le cycle de la culture (un arrosage peut être daté avant le semis).
- Un seul utilisateur à la fois : deux programmes ouverts en même temps peuvent s'écraser mutuellement dans le fichier JSON.
- Pas de sauvegarde automatique : si le fichier JSON est supprimé ou corrompu, le registre redémarre vide.


## Documents

[Dictionnaire des données](docs/dictionnaire-donnees.md) · [Tâches](docs/taches.md) · [Relevé des tests](docs/releve-tests.md) · [Journal de recherche](docs/journal-recherche.md) · [Fiche agronomique](docs/fiche-agronomique.md) · [Fiche individuelle](docs/fiche-individuelle.md)

## Auteur

✏️ *Prénom NOM, compte GitHub. Entraide : avec qui, sur quoi.*
