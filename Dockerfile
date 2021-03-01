FROM node:15-alpine
WORKDIR /app
COPY . .
RUN npm ci \
    && npx tsc
CMD ["npm", "run", "start:dev"]