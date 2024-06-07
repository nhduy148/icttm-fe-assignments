# Step 1: Build the app in a node.js environment
FROM node:14 as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Step 2: Deploy to GitHub Pages
FROM node:14 as deploy

WORKDIR /app

COPY --from=build /app/build ./build
COPY package*.json ./

RUN npm install gh-pages --save-dev

RUN npm run deploy
