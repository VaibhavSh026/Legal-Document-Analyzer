pipeline {
    agent any  // Use the appropriate agent, it could be a Windows node

    stages {
        stage('Git Checkout and Pull') {  // Stage to ensure the latest code is pulled from the repository
            steps {
                // Checkout the correct branch or create it if it doesn't exist, then pull the latest changes
                sh 'git checkout master || git checkout -b master origin/master'
                sh 'git pull origin master'
            } 
        }

        stage('Docker Build and Run') {  // Stage to build and start the Docker container
            steps {
                // Build the Docker image and run the container
                sh 'docker build -t portfolio-app .'
                sh 'docker run -d -p 3000:3000 --name portfolio-container portfolio-app'
            }
        }
    }
}