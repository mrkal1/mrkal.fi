FROM nginx:latest

RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - &&
RUN apt update && apt install -y nodejs
WORKDIR /usr/share/nginx/html
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install
COPY . .
EXPOSE 80
RUN npm run build