FROM node:alpine3.18 as build
WORKDIR /app
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
COPY yarn.lock /app/yarn.lock
RUN npm install --omit=dev
COPY . /app
RUN npm run build

FROM nginx:alpine3.18
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
