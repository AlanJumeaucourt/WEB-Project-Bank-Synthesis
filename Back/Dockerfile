# Dockerfile pour le BackEnd (Python)

# Répertoire de travail dans le conteneur
WORKDIR /app

# Installez les dépendances de l'application
RUN pip install -r requirements.txt

# Copiez le reste des fichiers de l'application
COPY . .

# Commande pour démarrer l'application
RUN python main.py