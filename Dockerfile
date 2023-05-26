FROM node:alpine as app-builder

WORKDIR /app
COPY . /app

RUN yarn install --frozen-lockfile
RUN yarn check
RUN yarn build
RUN echo "{ \"build_time\": \"$(date +'%Y-%m-%d %H:%M')\" }" > ./build/build-time.json

FROM nginx:alpine as deployment

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=app-builder /app/build /usr/share/nginx/html

EXPOSE 80