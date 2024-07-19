# Task Assignment: Make a Docker Compose Stack Configuration

## Objective

Fill out the **Dockerfile** and **docker-compose.yaml** to build and run a stack of container web application and a database. The configuration should include a build context, a volume for database data, and a custom network name.

## Instructions dockerfile

1. use image **python:alpine**
2. use directory **/app** as a workdir (working directory)
3. copy all file and dir in host directory to /app on container directory
4. install all dependencies using this command **pip install --no-cache-dir -r requirements.txt**
5. use this command as entrypoint of the container **["python", "app.py"]**

## Instructions docker-compose.yaml

1. make services called **web**

    - for build context use folder **./app**
    - use image_name and container_name **flask-postgres**
    - expose port 5000 of the container to any available port on your host port
    - create this 3 environtment **POSTGRES_USER: flaskpostgres**, **POSTGRES_PASSWORD: flaskpostgres**, **POSTGRES_DB: flaskpostgres**
    - make this services start after services db (**depends on service db**)
    - also make this service use custome network called **flask-postgres** and set the ip address to **10.1.1.3**

2. make services called **db**

    - use image **postgres:alpine**
    - use container_name **postgres**
    - create this 3 environtment **POSTGRES_USER: flaskpostgres**, **POSTGRES_PASSWORD: flaskpostgres**, **POSTGRES_DB: flaskpostgres**
    - volume a named volume called **postgres to /var/lib/postgresql/data**
    - also make this service use custome network called **flask-postgres** and set the ip address to **10.1.1.4**

3 create named volume called **postgres**

4 create custome network with **driver bridge** called **flask-postgres** and subnet **10.1.1.0/24**
