# Rendu projet CI-CD

## Participants :

- Jeremy AUBRY
- Antoine FALGIGLIO

## Application

### Description :

L'Application est une petite API de gestion de tâche. Vous pouvez consulter, ajouter
ou modifier via les routes suivantes :

```bash
GET  | /api/tasks
GET  | /api/task/{id}
POST | /api/tasks
PUT  | /api/task/{id}
```

### Installation locale

```bash
cd api
npm install
docker-compose up ou npm run dev
```

Une fois actif, vous pouvez utiliser l'API sur le port 3000 : <u>http://localhost:3000/api/tasks</u>

### CI

- Se déclenche sur chaque Pull Request vers main
- Vérifie :
  - Le style du code (ESLint)
  - Les tests unitaires
  - La construction de l'image Docker

En tant qu'auteur d'une Pull Request, voici les commandes à exécuter localement pour reproduire les étapes du CI :

```bash
git checkout -b feature/new_feature
cd api
//on fait ses modifications
git add [les fichiers de votre feature]
git commit -m "feat: new feat [votre feature]"
git push -u origin feature/new_feature
```

On bascule sur Github et dans la nouvelle branche que vous avez push, faite une nouvelle PR vers main.
Metter une Description et valider la PR.

Un collaborateur devra review votre PR afin de valider le merge.

### CD

- Se déclenche automatiquement sur main après merge d'une PR
- Construit et publie l'image Docker avec le tag `unstable`

Une fois que votre PR aura été validé, le workflow de CD va s'executer et cela déployera une nouvelle image docker avec le tag unstable sur le docker hub.

#### Livraison Continue

- Se déclenche lors de la création d'un tag
- Publie l'image Docker avec le numéro de version comme tag

Vous pouvez ajouter un nouveau tag avec les commandes :

```bash
# Créer un tag local
git tag v[votre version]

# Pousser un tag spécifique vers GitHub
git push origin v[votre version]
```

Cela executera le meme workflow mais déploira une nouvelle image docker avec la version de votre tag.
