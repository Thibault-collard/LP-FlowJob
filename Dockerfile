# Multi-stage Dockerfile for building and serving the Jobeasy landing page

FROM node:22-alpine AS builder
WORKDIR /app

# Copy package files (handle optional lock files)
COPY package.json ./
COPY package-lock.json* ./
COPY pnpm-lock.yaml* ./
COPY yarn.lock* ./

RUN npm install

# Copy source files
COPY . .
RUN npm run build

FROM nginx:stable-alpine AS runner
WORKDIR /usr/share/nginx/html

# Copy built files from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Create nginx configuration
RUN echo 'server { \
  listen 80; \
  server_name _; \
  root /usr/share/nginx/html; \
  index index.html; \
  location / { \
    try_files $uri $uri/ /index.html; \
  } \
  gzip on; \
  gzip_types text/plain text/css application/javascript application/json image/svg+xml; \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]



