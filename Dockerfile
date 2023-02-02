FROM node:alpine as app-builder

WORKDIR /app
COPY . /app

RUN npm i -g yarn@latest
RUN yarn install --frozen-lockfile
RUN yarn build

FROM nginx:alpine as deployment

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=app-builder /app/build /usr/share/nginx/html

EXPOSE 80