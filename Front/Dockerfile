# Dockerfile pour le serveur ReactJS utilisant Node.js
# Utilisez une image de base contenant Node.js
FROM node:14-alpine

# Répertoire de travail dans le conteneur
WORKDIR /app

# Copiez les fichiers package.json et package-lock.json
COPY package*.json ./

# Installez les dépendances de l'application
RUN npm install

# Copiez le reste des fichiers de l'application
COPY . .

# Construisez l'application ReactJS
RUN npm run build

# Commande pour démarrer l'application
CMD [ "npm", "start" ]