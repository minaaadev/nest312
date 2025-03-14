FROM node:22.14.0

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm cache clean --force && npm install --verbose --legacy-peer-deps

COPY . .

RUN npm run build

CMD ["npm", "run", "start:prod"]

EXPOSE 3000