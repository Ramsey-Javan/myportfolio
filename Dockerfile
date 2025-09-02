# Docker File for a my web application 
FROM nginx:alpine 

# Copy project files to nginx web root 
COPY ./ /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Default command
CMD ["nginx", "-g", "daemon off;"]
