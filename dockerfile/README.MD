# Guide to Dockerfile

A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image. Using Dockerfiles, users can automate the process of building Docker images.

## Anatomy of a Dockerfile

A Dockerfile typically consists of a series of instructions, each of which adds a new layer to the Docker image. Some common instructions include:

- `FROM`: Specifies the base image to build upon.
- `RUN`: Executes commands in the container during build time.
- `COPY` / `ADD`: Copies files and directories from the host machine into the container.
- `WORKDIR`: Sets the working directory for subsequent instructions.
- `EXPOSE`: Exposes ports to allow communication between the Docker container and the outside world.
- `CMD` / `ENTRYPOINT`: Defines the command to run when the container starts.

## Example Dockerfile

Here's an example of a Dockerfile for a simple nginx application:

```Dockerfile
# Use the official Nginx image based on Alpine Linux
FROM nginx:alpine

# Set the working directory inside the container
WORKDIR /usr/share/nginx/html

# Copy the index.html file to the container
COPY index.html .

# Expose port 80 to allow external connections
EXPOSE 80

# Specify the default command to run Nginx and keep it running in the foreground
CMD ["nginx", "-g", "daemon off;"]
```

In this example:

- `FROM nginx:alpine`: Specifies the base image for the container using the official Nginx image based on Alpine Linux.
- `WORKDIR /usr/src/app`: Set the working directory inside the container to /usr/share/nginx/html where subsequent instructions will be executed.
- `COPY index.html .`: Copies files from the host machine into the container. In this case, we're copying the index.html file, which contains the HTML content to be served by Nginx.
- `EXPOSE 80`: Informs Docker that the container will listen on port 80 at runtime. It simply documents which ports the container uses.
- `CMD ["nginx", "-g", "daemon off;"]`: Defines the default command to run when the container starts. Here, starts Nginx and keeps it running in the foreground. This allows Docker to manage the Nginx process and ensures that the container remains running as long as Nginx is running.

## Building Docker Images

To build a Docker image using the above Dockerfile, navigate to the directory containing the Dockerfile and run the following command:

```bash
docker build -t app-nginx:1.0 .
```

In this command, `-t app-nginx:1.0` tags the image with the name app-nginx.

## Running Docker Containers

After building the Docker image, you can run a container based on that image using the following command:

```bash
docker run -d -p 8081:80 app-nginx:1.0
```

In this command, `-p 8081:80` maps port 80 of the container to port 8081 of the host machine.
