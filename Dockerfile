FROM node:19.4-bullseye as build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY .  .

RUN npm run build

FROM nginxinc/nginx-unprivileged:1.22-alpine-perl

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build usr/src/app/build/ /user/share/nginx/html


CMD  ["npm","start"]

EXPOSE 80