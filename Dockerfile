FROM nginx:latest
WORKDIR /usr/share/nginx/html
COPY dist/mrkal.fi .
COPY default.conf /etc/nginx/conf.d/default.conf