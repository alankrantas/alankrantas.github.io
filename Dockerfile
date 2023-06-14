#
# Builder
#

FROM node:alpine as builder

WORKDIR /app
COPY . /app

RUN yarn install --frozen-lockfile
RUN yarn check
RUN yarn build
RUN echo "BUILD_TIME = $(date +'%Y-%m-%d %H:%M')"
RUN echo "BUILD_MESSAGE = 'docker build'"
RUN echo "{ \"build_time\": \"BUILD_TIME\", \"build_message\": \"BUILD_MESSAGE\" }" > ./build/build.json

#
# Deployment
#

FROM node:alpine

WORKDIR /app
COPY --from=builder /app/build /app/build

RUN npm i -g serve

EXPOSE 8080
CMD serve ./build -p 8080
