# change the base version when install new ams version
DOCKER_IMAGE_AMS_BASE?=imenco.jfrog.io/connect-default-docker/antmediaserver-base:2.5.3
DOCKER_IMAGE_AMS?=antmediaserver:latest

AMS_VERSION?=ant-media-server-enterprise-2.5.3-20230107_0851.zip

.PHONY: build-docker-base 
build-docker-base:
	docker build -t $(DOCKER_IMAGE_AMS_BASE) --build-arg AntMediaServer=$(AMS_VERSION) -f Dockerfile.base .

.PHONY: build-docker-ams
build-docker-ams:
	docker build -t $(DOCKER_IMAGE_AMS) .

.PHONY: build-docker
build-docker: build-docker-ams

.PHONY: push-docker
push-docker: build-docker
	docker push $(DOCKER_IMAGE_AMS)

.PHONY: push-docker-base
push-docker-base: build-docker-base
	docker push $(DOCKER_IMAGE_AMS_BASE)

.PHONY: docker-build-push
build-push-docker: build-docker push-docker


