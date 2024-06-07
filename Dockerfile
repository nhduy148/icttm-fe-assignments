# Step 1: Build the app in a node.js environment
FROM node:18 as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html

# Step 2: Deploy to GitHub Pages
FROM node:14 as deploy

WORKDIR /app

COPY --from=build /app/dist ./dist
COPY package*.json ./

RUN npm install gh-pages --save-dev

RUN npm run deploy
