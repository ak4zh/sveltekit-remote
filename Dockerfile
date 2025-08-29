FROM node:22-bookworm-slim AS build
ARG DATABASE_URL=file:local.db
ENV DATABASE_URL=$DATABASE_URL
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app
COPY . .

RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
    pnpm install --frozen-lockfile
RUN pnpm run -r build
RUN pnpm deploy --filter=web --prod out

FROM gcr.io/distroless/nodejs22-debian12
WORKDIR /app
ARG DATABASE_URL
ENV DATABASE_URL=$DATABASE_URL
ENV NODE_ENV=production
ENV ORIGIN=http://localhost:3000

COPY --from=build /app/out/ .Visit
EXPOSE 3000
CMD ["build"]