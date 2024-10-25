# Stage 1: Build the application
FROM node:20-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build:prod

# Stage 2: Run the application
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy only the necessary files from the build stage
COPY --from=build /app/dist ./dist
COPY --from=build /app/package*.json ./
COPY --from=build /app/.env.back ./
# Install only production dependencies
RUN npm install --only=production

# Expose the application port (change if necessary)
EXPOSE 3001
# Set the NODE_ENV environment variable
ENV NODE_ENV=back
# Command to run the application
CMD ["node", "dist/index.js"]