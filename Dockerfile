# Host Project
FROM node:22

WORKDIR /app

COPY package*.json ./
COPY scripts ./scripts
COPY federation.config.ts ./federation.config.ts


RUN npm install

COPY . .


EXPOSE 3000
CMD ["npm", "run", "dev"]
