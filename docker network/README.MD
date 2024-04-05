# Guide to Docker Networking

Docker networking allows containers to communicate with each other and with other networked systems. Docker provides several networking options to suit different use cases.

## Docker Networking Drivers

Docker supports various networking drivers:

1. **Bridge network**: The default network driver. It connects multiple containers on the same Docker host.
2. **Host network**: Removes network isolation between the container and the Docker host, allowing containers to use the host's network directly.
3. **Overlay network**: Facilitates communication between containers across multiple Docker hosts.
4. **Macvlan network**: Assigns a MAC address to each container's network interface, making it appear as a physical device on the network.
5. **None network**: Disables networking within the container.

## Creating a Docker Network

To create a Docker network, you can use the following command:

```bash
docker network create my_network
```

## Using a Docker Network

### Example: Connecting Multiple Containers

Let's say you have two containers, a web server and a database server, and you want them to communicate with each other.

First, create a Docker network:

```bash
docker network create my_network
```

Then, run the containers and connect them to the network:

```bash
docker run -d --name web-server --network my_network nginx:latest
docker run -d --name db-server --network my_network mysql:latest
```

In this example:

- `--network my_network` connects both containers to the my_network Docker network.

Now, the web-server container can communicate with the db-server container using its hostname (db-server) within the my_network network.
Managing Docker Networks

You can list, inspect, and remove Docker networks using the following commands:

- `docker network ls`: List all Docker networks.
- `docker network inspect <network_name>`: Inspect details about a specific network.
- `docker network rm <network_name>`: Remove a specific network.
