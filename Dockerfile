FROM node:22.14.0

WORKDIR /usr/src/app

# COPY package.json package-lock.json ./

COPY . .

RUN npm install --force

RUN npm run build

CMD ["npm", "run", "start:prod"]

EXPOSE 3000