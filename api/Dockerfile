# syntax=docker/dockerfile:1

# Use official Node.js runtime as base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app source
COPY src/ ./src/

# Expose port
EXPOSE 3000

# Start application
CMD ["npm", "run", "dev"]