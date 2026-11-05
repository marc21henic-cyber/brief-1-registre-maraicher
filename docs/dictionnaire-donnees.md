# Dictionnaire des données

> Un champ par ligne, d'après `SUJET.md` et le fichier de `donnees/`. La première ligne sert de modèle.

| Champ | Signification | Type | Règle de validation | Unité | Exemple |
| --- | --- | --- | --- | --- | --- |
| `id` | Identifiant unique | texte | non vide, absent des données | — | O03 |
| `date` | Date de l'opération | texte | date qui existe, au format `AAAA-MM-JJ` | — | `2026-10-21` |
| `parcelle` | Parcelle où l'opération a eu lieu | texte | non vide ; saisie en majuscules | — | `P1` |
| `culture` | Culture présente sur la parcelle | texte | non vide ; saisie en minuscules | — | `tomate` |
| `operation` | Type d'opération réalisée | texte | présente dans la liste fermée ci-dessous ; saisie en minuscules | — | `arrosage` |
| `coutFCFA` | Dépense enregistrée pour l'opération | nombre | positif ou nul ; accepte la virgule et les espaces (`3 000`) à la saisie, stocké comme nombre | FCFA | `2000` |   

**Listes de valeurs autorisées** :operation` ∈ { `semis`, `arrosage`, `désherbage`, `repiquage`, `récolte` }. Aucune liste pour `parcelle` ni `culture` (le registre ne contrôle pas leur cohérence).


**Sources** : ✏️
