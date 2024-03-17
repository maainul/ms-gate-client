# Stage 1: Build stage
FROM node:19.4-bullseye as build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY .  .

RUN npm run build

# Stage 2: Production stage
FROM nginxinc/nginx-unprivileged:1.22-alpine-perl

COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built files from the build stage
COPY --from=build /usr/src/app/build/ /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

#CMD  ["npm","start"]
