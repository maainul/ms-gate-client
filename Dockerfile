# Use official Node.js image as the base image
FROM node:14 AS build

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Use lightweight Nginx image as the base image for serving static files
FROM nginx:alpine

# Copy built React app from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Replace default Nginx configuration to enable request forwarding
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

# Expose port 3000
EXPOSE 3000

# Command to run Nginx server
CMD ["nginx", "-g", "daemon off;"]

