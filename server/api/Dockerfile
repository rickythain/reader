FROM node:17-slim
WORKDIR /api
COPY package.json .
RUN npm install
COPY . .
CMD ["node", "api.js"]
EXPOSE 5000