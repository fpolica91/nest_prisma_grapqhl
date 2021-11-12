FROM node
WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied


COPY package*.json ./
COPY prisma ./prisma/

# Install app dependencies
RUN npm install
RUN npx prisma generate

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start:dev"]