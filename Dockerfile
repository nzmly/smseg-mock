FROM node:20-alpine

WORKDIR /var/www/sms

COPY index.js package.json package-lock.json ./

RUN npm i

CMD ["node", "index.js"]
