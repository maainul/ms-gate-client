http://localhost:3002/vehicle/home



# Build stage
FROM node:20.10-alpine AS build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install -g npm@10.5.0
COPY . .
RUN npm run build

# Final stage
FROM nginx:1.25.4-alpine 
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/src/app/build /usr/share/nginx/html
EXPOSE 3002
