# Use the official OpenJDK 21 image
FROM openjdk:21-jdk

# Set the working directory
WORKDIR /app

# Copy the jar file into the container
COPY target/demo-0.0.1-SNAPSHOT.jar app.jar

# Specify the command to run the application
ENTRYPOINT ["java", "-jar", "/app/app.jar"]
