# Use the Node.js base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install all dependencies (including development dependencies)
RUN npm install

# Copy the entire React app source code into the container
COPY . .

# Build the React app inside the container
RUN npm run build

# Expose the port your app will run on
EXPOSE 3000

# Start the React app in development or production mode
CMD ["npm", "run", "dev" , "--" , "--host"]

