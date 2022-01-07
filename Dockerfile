FROM node:lts

WORKDIR '/app'

COPY package.json .
RUN yarn install

COPY . .

ENV HOST 0.0.0.0

CMD ["yarn", "dev"]