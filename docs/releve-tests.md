# Relevé des tests

> Écrivez le résultat attendu avant d'essayer. Un écart n'est pas une faute : notez-le, corrigez, refaites le test.

**Calculs à la main** : refaites à la main les résultats de référence de `SUJET.md`, puis comparez avec votre programme.

-Total : 3000 + 4500 + 2000 + 5000 + 1500 + 8000 + 4000 + 3500 + 2500 + 6000 = **40 000 FCFA**  (programme : 40000).
- P1 (O01, O03, O06, O09) : 3000 + 2000 + 8000 + 2500 = **15 500 FCFA, 4 opérations** .
- P2 (O02, O05, O08) : 4500 + 1500 + 3500 = **9 500 FCFA, 3 opérations** .
- P3 (O04, O07, O10) : 5000 + 4000 + 6000 = **15 000 FCFA, 3 opérations** .
- Minimum **1 500** (O05), maximum **8 000** (O06) .

**Essais dans le menu** : un ajout valide (encore là après redémarrage), chaque règle refusée, une recherche introuvable, chaque tri, la synthèse, un choix inconnu.

| Action | Attendu | Obtenu | Testeur |
| --- | --- | --- | --- |
| Ajouter O11 (`o11`, `2026-10-27`, `p1`, `Tomate`, `Récolte`, `2500`) | « Opération O11 ajoutée. Le registre compte 11 opération(s). » ; encore là après redémarrage | confome |  |
| Ajouter avec coût `-500`, vide, `abc`, `500 FCFA` | refusé, message sur le coût, registre inchangé | confome |  |
| Ajouter avec `O01` (doublon) | refusé : identifiant déjà utilisé |confome  |  |
| Date `27/10/2026` ou `2026-02-30` | refusée | confome |  |
| Opération `labour` | refusée, liste des opérations affichée | confome |  |
| Saisie avec six erreurs à la fois | six lignes d'erreur | confome |  |
| Rechercher `O03` / `O99` | ligne O03 / « Opération O99 introuvable. » | confome |  |
| Rechercher parcelle `P2` / culture `aubergine` | 3 opérations / 3 opérations | confome |  |
| Tri par coût, puis par date, puis lister | tri correct ; la liste (choix 2) revient dans l'ordre d'origine | confome |  |
| Synthèse (données de départ) | 40000 ; P1 4/15500 ; P2 3/9500 ; P3 3/15000 ; min 1500, max 8000 | confome |  |
| Choix `9`, Entrée sans rien taper | « Choix inconnu : … » puis le menu | confome |  |
| Registre vide (`[]`) : lister, synthèse | « Aucune opération enregistrée. » ; total 0, « aucune donnée » |confome  |  |
| Fichier de données absent | message « Impossible de lire … Le registre démarre vide. » |confome |  |
| Bonus : supprimer `O03`, `O99` ; modifier coût, `id`, valeur invalide | messages imposés, fichier mis à jour | confome |  |

**Sur un autre poste** (`git clone`, `node app.js`, `npm test`, en suivant le README) : ✏️
