# preguntas


# Setup
````
# Crete a docker image with name preguntas_pg
docker build -t preguntas_pg .
# Create and runs a container with name preguntas_cont based on preguntas_pg image
docker run -itd --name preguntas_cont preguntas_pg
# Connect to the container
docker exec -it preguntas_cont bash

````
