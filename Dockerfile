FROM node:18-alpine

WORKDIR /app

EXPOSE 3000

COPY package.json ./

RUN yarn install

COPY . ./

CMD ["yarn", "dev"]
