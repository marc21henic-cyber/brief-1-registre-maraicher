# Tableau des tâches

> Planifiez vous-même, puis tenez le tableau à jour. Une preuve : un commit, un test vert, un document.

| Tâche | Prévu | Fait le | Preuve |
| --- | --- | --- | --- |
| Poste et dépôt prêts ; besoin compris ; documents commencés | Jour 1 | 2026-11-02 (dépôt) ; documents | Commit « Départ du brief 1 : kit fourni » ; README (section Contexte) |
| Fiche 2 : lire et écrire le JSON | Jour 1 | 2026-11-03 | Commit « stockage: Lit le fichier JSON et renvoie le tableau » ; `npm run test:stockage` : 3 tests verts |
| Fiche 3 : ajouter et lister ; choix 1 et 2 ; erreurs | Jour 2 | 2026-11-04 | Commits « registre: … » (2026-11-03), « app: choix 1… » et « app: choix 2 Lister… » ; `npm run test:registre`  : 13 tests verts |
| Fiche 4 : rechercher et trier ; choix 3 et 4 | Jour 3 | 2026-11-04 | Commits « recherche: … », « rechercher: (trier)… », « app:choix 3… » et « app:choix 4… » ; `npm run test:recherche`: 7 tests verts |
| Fiche 5 : synthèse ; choix 5 | Jour 3 | 2026-11-04 | Commit « app: choix 5 synthese» ; `npm run test:synthese` : 5 tests verts |
| Tests par un camarade ; mes propres tests | Jour 4 | 2026-11-05 | `test/cas-limites.test.js` (11 tests) ; `docs/releve-tests.md` rempli |
| Fiche agronomique ; README ; documents | Jour 4 | 2026-11-05 | `docs/` et README ; fiche agronomique relue par le coach |
| Dépôt cloné et lancé ailleurs ; démonstration répétée | Jour 4 | 2026-11-05 | Clone dans un autre dossier : `node app.js` et `npm test` fonctionnent |
| Bonus | Jour 3 | 2026-11-05 | Commits « bonus : Supprime du registre l'opération qui a cet identifiant. » et «  bonus : ajout de choix 7 modification des operation et rectification de certains parametre » ; `npm run test:bonus` : 8 tests verts |

**Blocages** (le message exact, ce que j'ai essayé, la solution) :

1. **« erreur is not defined »** (choix 1, quand une saisie est refusée). J'ai relu la boucle d'affichage des erreurs. J'avais écrit `for (const erreurs of erreur)` : les deux noms étaient inversés. Solution : `for (const erreur of erreurs)`, où `erreurs` est le tableau et `erreur` un seul message.
2. **« Supprimee is not defined » puis « supprimee is not defined »** (choix 6). J'avais déclaré `const Supprimee` avec une majuscule et testé `supprimee` en minuscule : JavaScript distingue les majuscules. Solution : chercher le nom avec Ctrl+F et écrire `supprimee` partout.
3. **Textes qui ne correspondaient pas à la fiche** (accents manquants, `Votre choix:` sans espace avant les deux-points). J'ai comparé mon affichage avec le dialogue imposé de `fiches/3-ajouter-lister.md`, ligne par ligne, et j'ai corrigé.
