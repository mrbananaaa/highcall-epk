FROM node:lts-alpine AS base

WORKDIR /app
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
RUN corepack enable && corepack prepare pnpm@latest --activate

FROM base AS development

WORKDIR /app

COPY package.json pnpm-lock.yaml* ./

# Mount pnpm store to speed up install times inside the container
RUN --mount=type=cache,target=/root/.local/share/pnpm/store \
  pnpm i

ENV NODE_ENV=development

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
# Enable this on non linux environments
# ENV WATCHPACK_POLLING=true

CMD ["pnpm", "run", "dev"]
