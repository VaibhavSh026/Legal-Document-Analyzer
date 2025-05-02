pipeline {
    agent {
        label '' // Leave it empty to use master node (inside Jenkins container)
    }

    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker version' // Confirm docker is available
                    sh 'docker build -t legal-doc-analyzer-app .'
                }
            }
        }

        stage('Run Docker Compose') {
            steps {
                sh 'docker-compose down || true'
                sh 'docker-compose up -d --build'
            }
        }
    }
}
