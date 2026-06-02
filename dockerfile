FROM node:20-alpine

WORKDIR /app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "start"]


# 1. add .dockerignore
# 2. rebuild
# docker build -t uniplace .

# 3. run
# docker run -p 3000:3000 uniplace
