# app-projects
> Ce projet est un défi qu'il m'a été donné. J'ai eu 2 semaines pour apprendre les bases de Angular et Node.js


## Informations Générales

app-projects est composé de 2 dossiers, le front contient l'application client, et le back l'application serveur.
Le front contient une page de : 
- connexion avec un username
- liste des projets de l'utilisateur connecté
- création ou edition de projet

Le back lui contient une API qui communique avec mongoDB.

<!-- You don't have to answer all the questions - just the ones relevant to your project. -->


## Technologies utilisées
- Node.js - 18.17.1
- Angular - 16.2.3
- Angular Material - 16.2.3
- NestJS - 10.1.16
- MongoDB - 6.0.9


## Fonctionnalitées
Fonctionnalités disponible :
- Page de connexion
- Page avec la liste des projets
- Page pour editer ou ajouter un projet


## Installation et Usage
Pour essayer l'application vous aller télécharger le projet est faire fonctionner en local sur votre machine le front et le back.

Pour télécharger le projet:
```
git clone 'https://github.com/AxekPhanor/app-projects.git'
```


Ensuite, une fois que vous êtes dans le dossier du projet, ouvrez 2 terminaux, un dans le dossier front et l'autre dans le dossier back.
Installer avec npm pour le back et le front: 
```
npm install
```

Pour que votre back communique avec votre base de données mongoDB, il faut en créer une ! [MongoDB](https://www.mongodb.com/fr-fr)

Une fois vous avez créer votre base de données ouvrez '\projet\app-projects\back.env' et ajouter votre URI pour communiquer avec mongoDB.
Exemple :
```
URI=mongodb+srv://<user>:<password>@serverlessinstance0.m7exemp.mongodb.net/
```

> Si vous voulez tester l'app sans avoir à créer la base de données par vous même n'hesitez pas à me contacter pour que je vous donne accès à ma base de données. 


Maintenant que les installations sont terminées, vous pouvez lancer l'app front et l'app back dans leurs terminaux respectifs avec la commande:
```
npm start
```

Et voilà vous accès au site app-projects : [http://localhost:4200/](http://localhost:4200/)


## Etat du projet
Le projet est : _Terminé_ 


## Améliorations possibles

Améliorations possibles:
- Avoir une connexion sécurisé utilisant OAuth2
- Pouvoir supprimer un projet

## Contact
Créer par [@AxekPhanor](https://github.com/AxekPhanor)

Mail : axel.phanor64@gmail.com



