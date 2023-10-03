FROM node:17-slim
WORKDIR /product
COPY package.json .
RUN npm install
COPY . .
CMD ["node", "product.js"]
EXPOSE 50051