#!/bin/bash

# Define directories
CONTROLLER_DIR="./controllers"
SERVICE_DIR="./services"
DTO_DIR="./dtos"

# Create directories if they don't exist
mkdir -p $CONTROLLER_DIR
mkdir -p $SERVICE_DIR
mkdir -p $DTO_DIR

# Find and move files to corresponding directories
find . -type f -name "*controller.ts" -exec mv {} $CONTROLLER_DIR \;
find . -type f -name "*service.ts" -exec mv {} $SERVICE_DIR \;
find . -type f -name "*.dto.ts" -exec mv {} $DTO_DIR \;

echo "Files have been organized."
