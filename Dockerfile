FROM nginx:alpine

RUN mkdir usr/share/nginx/html/3ddropdown
COPY /dist/ usr/share/nginx/html/3ddropdown

EXPOSE 80