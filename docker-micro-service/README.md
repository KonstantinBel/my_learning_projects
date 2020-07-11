*development*

docker build -t micro-node .
docker network create micro-net
docker volume create micro-storage

docker run \
  --rm \
  --name micro-server \
  -p 3000:3000 \
  --network micro-net \
  --volume /home/bartzlo/my_learning_projects/docker-micro-service/server/src:/user/app/src \
  micro-node

docker run \
  --rm \
  --name micro-reformer \
  --network micro-net \
  --volume /home/bartzlo/my_learning_projects/docker-micro-service/reformer/src:/user/app/src \
  micro-node

docker run \
  --rm \
  --name micro-logger \
  -p 4000:4000 \
  --network micro-net \
  --volume /home/bartzlo/my_learning_projects/docker-micro-service/logger/src:/user/app/src \
  --volume micro-storage:/user/app/volume \
  micro-node


*production*

docker build -t micro-node . \
&& docker network create micro-net \
&& docker volume create micro-storage \
&& docker run \
  --rm \
  -d \
  --name micro-server \
  -p 3000:3000 \
  --network micro-net \
  --volume /home/bartzlo/my_learning_projects/docker-micro-service/server/src:/user/app/src \
  micro-node \
&& docker run \
  --rm \
  -d \
  --name micro-reformer \
  --network micro-net \
  --volume /home/bartzlo/my_learning_projects/docker-micro-service/reformer/src:/user/app/src \
  micro-node \
&& docker run \
  --rm \
  -d \
  --name micro-logger \
  -p 4000:4000 \
  --network micro-net \
  --volume /home/bartzlo/my_learning_projects/docker-micro-service/logger/src:/user/app/src \
  --volume micro-storage:/user/app/volume \
  micro-node


*remove*

docker rmi micro-node \
&& docker network  rm micro-net \
&& docker volume rm micro-storage
