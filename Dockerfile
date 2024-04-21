#
# Builder
#

FROM node:alpine as builder

WORKDIR /app
COPY . /app

RUN yarn install --frozen-lockfile
RUN yarn check
RUN yarn build
RUN echo "{ \"build_time\": \"$(date +'%Y-%m-%d %H:%M')\" }" > ./build/website/build.json

#
# Deployment
#

FROM node:alpine as production

WORKDIR /app
COPY --from=builder /app/build /app/build

RUN npm i -g serve

EXPOSE 8080
CMD serve ./build -p 8080
