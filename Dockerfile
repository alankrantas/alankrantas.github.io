FROM node:alpine as app-builder

WORKDIR /app
COPY . /app

RUN yarn install --frozen-lockfile
RUN yarn check
RUN yarn build

FROM golang:alpine as server-builder

WORKDIR /app
COPY /go-gin/ /app

RUN go mod download
RUN CGO_ENABLED=0 go build -mod=readonly -v -o server

FROM alpine

WORKDIR /app
COPY --from=app-builder /app/dist /app/dist
COPY --from=server-builder /app/server /app

EXPOSE 80

CMD ./server

# Or use Nginx:

# FROM nginx:alpine as production

# COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
# COPY --from=app-builder /app/dist /usr/share/nginx/html

# EXPOSE 80