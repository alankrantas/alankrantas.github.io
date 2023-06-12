# Builder

FROM node:alpine as builder

WORKDIR /app
COPY . /app

RUN yarn install --frozen-lockfile
RUN yarn check
RUN yarn build
RUN echo "{ \"build_time\": \"$(date +'%Y-%m-%d %H:%M')\", \"build_message\": \"${{ github.event.head_commit.message }} ($(git rev-parse --short ${{ github.sha }}))\" }" > ./build/build.json

# Deployment

FROM node:alpine

WORKDIR /app
COPY --from=builder /app/build /app/build

RUN npm i -g serve

EXPOSE 8080
CMD serve ./build -p 8080
