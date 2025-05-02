pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/VaibhavSh026/Legal-Document-Analyzer.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t legal-doc-analyzer-app .'
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
