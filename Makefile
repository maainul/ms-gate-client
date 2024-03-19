.PHONY :  docker-build-gate-client

docker build -t ms-gate-client .


docker run -d --name ms-gate-client -p 3002:3002 ms-gate-client
