# Use the official OpenJDK image with Java 21
FROM openjdk:21-jdk

# Set the working directory
WORKDIR /app

# Copy the jar file from the target folder to the working directory
COPY target/demo-0.0.1-SNAPSHOT.jar app.jar

# Expose the application port (default is 8080)
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
