FROM node:15-alpine
WORKDIR /app
COPY package* ./
RUN npm ci
COPY . .
CMD ["npm", "run", "start"]