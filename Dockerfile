FROM node:lts 
EXPOSE 4000
WORKDIR /app
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm install 
COPY . /app
ENTRYPOINT ["node", "src/index.js"]
