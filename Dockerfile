# Étape 1 : Construire l'application Angular
FROM node:18 AS build

WORKDIR /app

# Copier les fichiers package.json et package-lock.json pour installer les dépendances
COPY package*.json ./

RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Construire l'application pour la production
RUN npm run build --prod

# Étape 2 : Servir l'application avec un serveur NGINX
FROM nginx:alpine

# Copier les fichiers de build Angular dans le dossier nginx
COPY --from=build /app/dist/quiz-app /usr/share/nginx/html

# Copier un fichier de configuration NGINX personnalisé (facultatif)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
