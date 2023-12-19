FROM node:18 as build-deps

WORKDIR /opt/app

COPY package*.json .

RUN npm clean-install --include=dev

COPY . .

RUN npm run build

CMD ["npm","start"]