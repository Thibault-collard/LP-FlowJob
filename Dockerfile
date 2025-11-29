# Multi-stage Dockerfile for building and serving the FlowJob landing page

FROM node:22-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./ 2>/dev/null || true
RUN npm install

COPY . .
RUN npm run build

FROM nginx:stable-alpine AS runner
WORKDIR /usr/share/nginx/html

COPY --from=builder /app/dist ./

COPY <<EOF /etc/nginx/conf.d/default.conf
server {
  listen 80;
  server_name _;

  root /usr/share/nginx/html;
  index index.html;

  location / {
    try_files \$uri /index.html;
  }

  gzip on;
  gzip_types text/plain text/css application/javascript application/json image/svg+xml;
}
EOF

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]



