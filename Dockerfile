# Stage 1 - the build process
# Specify a base image
FROM node:latest as build-stage

WORKDIR /app

# Install some dependencies
COPY ./package.json ./
RUN npm install
COPY ./ ./

RUN npm run build:prod

# Stage 2 - the production environment
FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY nginx/default.conf /etc/nginx/conf.default
COPY --from=build-stage /app/build/ /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

#Sources:
#https://github.com/tiangolo/medium-posts/tree/master/react-in-docker
#https://medium.com/@shakyShane/lets-talk-about-docker-artifacts-27454560384f
#https://blog.aevitas.co.uk/running-react-on-docker-with-nginx/