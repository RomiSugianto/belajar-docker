# Docker Commands

## Container Lifecycle Management

- `docker run`: Create and start a new container from an image.
- `docker start`: Start one or more stopped containers.
- `docker stop`: Stop one or more running containers gracefully.
- `docker restart`: Restart one or more containers.
- `docker pause`: Pause all processes within one or more containers.
- `docker unpause`: Unpause all processes within one or more containers.
- `docker kill`: Kill one or more running containers forcefully.
- `docker rm`: Remove one or more containers.
- `docker ps`: List running containers.
- `docker ps -a`: List all containers (running and stopped).
- `docker inspect`: Display detailed information about a container.

## Container Interaction

- `docker exec`: Run a command in a running container.
- `docker attach`: Attach local standard input, output, and error streams to a running container.
- `docker logs`: Fetch the logs of a container.
- `docker cp`: Copy files/folders between a container and the local filesystem.
- `docker export`: Export a container's filesystem as a tar archive.
- `docker import`: Import the contents from a tarball to create a filesystem image.

## Image Management

- `docker pull`: Pull an image or a repository from a registry.
- `docker push`: Push an image or a repository to a registry.
- `docker build`: Build an image from a Dockerfile.
- `docker images`: List locally available images.
- `docker rmi`: Remove one or more images.
- `docker tag`: Tag an image into a repository.

## Volume Management

- `docker volume create`: Create a volume.
- `docker volume ls`: List volumes.
- `docker volume inspect`: Display detailed information about a volume.
- `docker volume rm`: Remove one or more volumes.

## Network Management

- `docker network create`: Create a network.
- `docker network ls`: List networks.
- `docker network inspect`: Display detailed information about a network.
- `docker network rm`: Remove one or more networks.

## Registry Authentication and Configuration

- `docker login`: Log in to a Docker registry.
- `docker logout`: Log out from a Docker registry.
- `docker config`: Manage Docker configs.
- `docker secret`: Manage Docker secrets.

## System Information and Management

- `docker info`: Display system-wide information.
- `docker version`: Show the Docker version information.
- `docker system df`: Display disk usage.
- `docker system prune`: Remove all unused containers, networks, images (both dangling and unreferenced), and optionally volumes.
- `docker system events`: Get real-time events from the Docker server.
