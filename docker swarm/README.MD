# Docker Swarm

## 1. Introduction to Docker Swarm

Docker Swarm is Docker's native clustering and orchestration tool. It allows you to manage a cluster of Docker engines as a single virtual system, enabling the deployment, management, and scaling of containerized applications.

Key Concepts:

- **Nodes**: Individual machines in a swarm, There are two types of nodes Manager and worker
- **Services**: A service is the definition of how you want your containers to behave. It includes the Docker image, the number of replicas, network configurations, and more.

Key Features:

- **High Availability**: Ensures your applications run even if some nodes fail.
- **Scalability**: Easily scale services up or down.
- **Load Balancing**: Automatically distributes incoming requests across available nodes.

## 2. Setting Up Docker Swarm

Prerequisites:

- Install Docker on all machines you want to include in the swarm.
- Initializing the Swarm:

### Initialize the Swarm Manager

```bash
docker swarm init --advertise-addr <MANAGER-IP>
```

Replace **MANAGER-IP** with the IP address of the manager node.

### Join Worker Nodes

On each worker node, run the command generated by the docker swarm init command. It looks like:

```sh
docker swarm join --token <TOKEN> <MANAGER-IP>:2377
```

Replace **TOKEN** and **MANAGER-IP** with the appropriate values.

## 3. Swarm Management Commands

### Node Management

List Nodes:

```sh
docker node ls
```

Promote a Node to Manager:

```sh
docker node promote <NODE-ID>
```

Demote a Node to Worker:

```sh
docker node demote <NODE-ID>
```

## 4. Deploying Services

### Creating a Service

Deploy a Service:

```sh
docker service create --name <SERVICE-NAME> --replicas <NUMBER> <IMAGE>
```

Example:

```sh
docker service create --name web --replicas 3 -p 80:80 nginx
```

List Services:

```sh
docker service ls
```

Inspect a Service:

```sh
docker service inspect <SERVICE-ID>/<SERVICE-NAME>
```

Scale a Service:

```sh
docker service scale <SERVICE-NAME>=<NUMBER>
```

Example:

```sh
docker service scale web=5
```

Remove a Service:

```sh
docker service rm <SERVICE-NAME>
```

## 5. Load Balancing

Docker Swarm automatically load-balances requests among the replicas of a service. You can access the service through any node in the swarm using the published port.

## 6. Rolling Updates

Docker Swarm supports rolling updates, which allow you to update the services with zero downtime.

Update a Service:

```sh
docker service update --image <NEW-IMAGE> <SERVICE-NAME>
```

Example:

```sh
docker service update --image nginx:latest web
```
