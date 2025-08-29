APP ?= web

build:
	docker build -t my-$(APP) .

run:
	docker run \
		--rm \
		-p 3000:3000 \
		-e DATABASE_URL="file:///app/local.db" \
		-v $(shell pwd)/local.db:/app/local.db \
		my-$(APP)