APP ?= web

build:
	docker build -t my-$(APP) --build-arg TARGET_APP=$(APP) .

run:
	docker run --rm -p 3000:3000 my-$(APP)
