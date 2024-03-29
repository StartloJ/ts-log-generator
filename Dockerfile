FROM node:18-alpine
WORKDIR /app
COPY package* ./
RUN npm ci
COPY . .
CMD ["npm", "run", "start"]