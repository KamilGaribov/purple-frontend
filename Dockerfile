FROM node:alpine
RUN mkdir -p /usr/src
WORKDIR /usr/src
COPY . /usr/src
RUN npm cache clean --force
RUN npm install
RUN npm install next@latest
#RUN npm run build
EXPOSE 3000
#CMD ["npm", "run", "start"]