# Use an official OpenJDK runtime as a parent image
FROM openjdk:17

# Set the working directory in the container
WORKDIR /spring-cloud-medicine-microservice/target
WORKDIR /spring-cloud-transaction-microservice/target

# Copy the packaged jar file into the container
COPY target/spring-cloud-transaction-microservice-0.0.1-SNAPSHOT.jar
COPY target/spring-cloud-medicine-microservice-0.0.1-SNAPSHOT.jar

# Expose the port the app runs on
EXPOSE 8081

# Run the jar file
ENTRYPOINT ["java", "-jar", "spring-cloud-medicine-microservice-0.0.1-SNAPSHOT.jar"]
ENTRYPOINT ["java", "-jar", "spring-cloud-transaction-microservice-0.0.1-SNAPSHOT.jar"]