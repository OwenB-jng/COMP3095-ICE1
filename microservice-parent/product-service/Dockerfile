# in future, copy paste this but refactor
# this is all to create an image
# BUILD STAGE
# Building image
FROM gradle:8-jdk17-alpine AS builder

# Copy local app file from host to image
COPY --chown=gradle:gradle . /home/gradle/src

# Set directory for image for future commands
WORKDIR /home/gradle/src

# Build a release artifact in the container, not host machine
RUN gradle build -x test

#PACKAGE STAGE
#Base image
FROM openjdk:17-alpine

RUN mkdir /app

# use *.jar because the version number will be appended. refactor /product-service.jar in future
COPY --from=builder /home/gradle/src/build/libs/*.jar /app/product-service.jar

# environment variables, maybe this is wrong because username is rootadmin in other places
ENV MONGO_DB_USERNAME = mongoadmin \
    MONGO_DB_PWD = password

# ports, remember which port you already have in use
EXPOSE 8084

# use the name from the COPY line above
ENTRYPOINT ["java", "-jar", "/app/product-service.jar"]