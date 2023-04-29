FROM node:16

# Create app directory
WORKDIR /usr/src/app

#Install app dependencies
# A wildcard is used to ensure both package.json and AND package-lock.json are copied
#where available (npm@5+)
COPY package*.json ./

RUN npm install

#Bundle app source
COPY server1.js .

EXPOSE 8080
CMD ["node", "server1.js"]