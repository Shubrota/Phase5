# #STAGE 1: Build Angular Project
FROM node:alpine as build

WORKDIR /usr

COPY . /usr

RUN npm install -g @angular/cli && npm install && ng build
#RUN npm install -g json-server --silent

# #STAGE 2: Run 
FROM nginx:alpine-slim
COPY --from=build /usr/dist/angular_project_with_service_routing/browser /usr/share/nginx/html

# Expose nginx webserver 
EXPOSE 80

# # Step 3: Install JSON Server
RUN apk update && \
    apk add --no-cache nodejs npm

# # Step -4 : start json-server
WORKDIR /json-server
COPY db.json /json-server/db.json
#RUN npx json-server --watch /json-server/db.json --port 3000 & nginx -g 'daemon off;'

# Step 5: Install supervisord
RUN apk add --no-cache supervisor

# Step 6: Copy supervisord configuration file
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Step 7: Specify the command to start supervisord
CMD ["supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]

