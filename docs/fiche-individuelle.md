# Fiche individuelle

> Une page, avant la livraison. Prénom, nom, compte GitHub : MARC HENOC EBENEZER LIADE / [compte GitHub](https://github.com/marc21henic-cyber/brief-1-registre-maraicher.git)

1. **Une fonction que j'ai écrite**, et comment elle marche : `trierParCout` (dans `src/recherche.js`), écrite avec l'aide d'une IA (Claude) que j'ai citée dans mon journal de recherche. Elle reçoit le registre et renvoie une copie triée du coût le plus petit au plus grand. Je fais d'abord une copie avec `[...operations]`, parce que `sort` modifie le tableau sur lequel on l'appelle et je ne veux pas changer l'ordre du registre. Ensuite `sort((a, b) => a.coutFCFA - b.coutFCFA)` compare deux opérations : si le résultat est négatif, `a` passe avant `b`. Sans cette fonction de comparaison, `sort` trie en texte, et 15000 passerait avant 2000. Avec un registre vide, elle renvoie un tableau vide.

2. **Une difficulté, et sa solution** : au choix 6 (supprimer), le programme affichait « Supprimee is not defined ». J'avais écrit `const Supprimee` avec une majuscule mais testé `supprimee` en minuscule à la ligne d'après. JavaScript distingue les majuscules, donc ce sont deux noms différents. J'ai cherché `Supprimee` avec Ctrl+F et écrit `supprimee` partout. J'ai aussi trouvé un import manquant (`supprimerOperation` n'était pas importé depuis `src/bonus.js`) qui donnait la même erreur « is not defined ». Depuis, je relis les noms de variables quand je vois ce message.

3. **L'entraide** (qui m'a aidé, qui j'ai aidé, sur quoi) : ✏️ 