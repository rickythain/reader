FROM node:14-alpine AS development
ENV NODE_ENV development
WORKDIR /client
COPY package.json .
RUN npm install
COPY . . 
EXPOSE 3000
CMD [ "npm", "start"]