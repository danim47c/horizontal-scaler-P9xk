FROM node:18-alpine as builder
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn

COPY . .
RUN yarn build

FROM traefik:2.9
WORKDIR /app

RUN apk --no-cache add nodejs
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/build /app/build
COPY ./configs/* /etc/traefik/

ENTRYPOINT node build/index.js & traefik