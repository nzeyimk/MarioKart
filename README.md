🎮 Mario Kart - Algorithme de Lee 🚀
Bienvenue dans Mario Kart - Algorithme de Lee ! Ce projet implémente l'algorithme de Lee pour trouver le chemin le plus court dans un labyrinthe représenté sous forme de graphe.

📌 Objectif
Développer un programme capable de déterminer le chemin optimal entre un point de départ et un point d'arrivée dans une carte modélisée sous forme de graphe.

🛠️ Fonctionnalités
✔ Lecture et parsing d'une carte depuis un fichier d'entrée.
✔ Modélisation du labyrinthe sous forme de graphe.
✔ Application de l'algorithme de Lee pour trouver le chemin le plus court.
✔ Affichage du chemin sous forme de coordonnées y:x.

📍 Exemple de Carte
mathematica
Copier
Modifier
  oo..E
  o..o.
  .o..o
  .So..
  .....
🏁 Légende
. : Point traversable
o : Obstacle
S : Point de départ
E : Point d'arrivée
🚶 Contraintes de Déplacement
Déplacements possibles : Haut, Bas, Gauche, Droite
Déplacements interdits : Diagonale
🚀 Exécution du Programme
🔹 Compilation & Exécution
sh
Copier
Modifier
tsc main.ts
node main.js map.txt
📌 Format de Sortie
Le programme affiche la liste des coordonnées du chemin du départ à l’arrivée, sous la forme y:x.

🎯 Exemple
Entrée :

mathematica
Copier
Modifier
  oo..E
  o..o.
  .o..o
  .So..
  .....
Sortie :

sh
Copier
Modifier
3:1 4:1 4:2 4:3 3:3 2:3 2:2 1:2 0:2 0:3 0:4
📄 Format du Fichier Carte
Chaque fichier carte suit cette structure :

mathematica
Copier
Modifier
oo..E
o..o.
.o..o
.So..
.....
🔹 Le coin supérieur gauche (0,0) est la référence des coordonnées.

💡 Contribuer
Les contributions sont les bienvenues ! 🚀
Si vous souhaitez ajouter des fonctionnalités ou optimiser l'algorithme, n'hésitez pas à ouvrir une pull request.

📜 Licence
Ce projet est sous licence MIT. Vous êtes libre de l'utiliser, le modifier et le distribuer.

🎯 Amusez-vous bien à coder et à explorer des labyrinthes ! 🏎️💨
