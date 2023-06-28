.PHONY: up down build clean

up:
	docker compose up -d

up-debug:
	docker compose up

down:
	docker compose down

build:
	docker compose build

clean:
	docker compose down -v --rmi all --remove-orphans

stop-remove-single:
	docker stop $(CONTAINER) || true
	docker rm $(CONTAINER) || true

delete-image:
	docker rmi ${IMAGE} 
