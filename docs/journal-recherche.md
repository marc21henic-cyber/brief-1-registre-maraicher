# Journal de recherche

> Chaque recherche utile : ce que vous cherchiez, où (cours, [MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript), [Node.js](https://nodejs.org/api/), un camarade, une IA…), ce que vous avez compris. Ce que vous gardez, vous devez pouvoir l'expliquer.

| Ce que je cherchais | Où | Ce que j'ai compris | Utilisé dans |
| --- | --- | --- | --- |
| Lire un fichier JSON et le transformer en tableau | MDN (`JSON.parse`), doc Node.js (`fs/promises`),| `readFile` renvoie une promesse : il faut `await` ; `JSON.parse` transforme le texte en tableau | `chargerJson` |
| Écrire un tableau en JSON indenté | MDN (`JSON.stringify`), Claude (IA) et Gemini (IA)  | le 3ᵉ argument de `JSON.stringify` (2) donne l'indentation ; `writeFile` remplace le contenu | `enregistrerJson` |
| Trier avec un comparateur numérique | MDN (`Array.prototype.sort`),   | sans comparateur, `sort` trie en texte (`[8000, 15000, 2000]` → `[15000, 2000, 8000]`) ; `a - b` donne l'ordre croissant ; le tri est stable | `trierParCout`, `trierParCoutDecroissant` |
| Ne pas modifier le tableau d'origine en triant | MDN (opérateur de décomposition `...`), Claude (IA) et Gemini (IA)  | `[...operations]` fait une copie ; `sort` modifie le tableau sur lequel on l'appelle | tris |
| Comparer deux dates `AAAA-MM-JJ` | Claude (IA) et Gemini (IA)  | l'ordre alphabétique est l'ordre du calendrier ; on compare avec `<` et `>`, pas avec `-` | `trierParDate` |
| Boucle du menu, choix multiple, erreurs | cours, MDN (`while`, `switch`, `try/catch`),   | `while` répète tant que la condition est vraie ; `switch` choisit selon la valeur ; `catch` empêche le programme de s'arrêter | `app.js` |
| Parcourir clés et valeurs d'un objet | MDN (`Object.entries`), Claude (IA) et Gemini (IA)  | `Object.entries(obj)` donne des paires `[clé, valeur]` ; `obj[cle]` ≠ `obj.cle` | choix 5 |
| Retirer un élément d'un tableau à une position | MDN (`findIndex`, `splice`), Claude (IA) et Gemini (IA)  | `findIndex` donne la position (ou -1) ; `splice(position, 1)` retire et renvoie l'élément | `supprimerOperation` |


> Une IA (CLAUDE et GEMINI) mon aidé à écrire et à comprendre le code de ce projet, étape par étape.