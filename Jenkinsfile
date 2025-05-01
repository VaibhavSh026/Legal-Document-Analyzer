pipeline {
  agent any

  stages {
    stage('Clone Repository') {
      steps {
        git 'https://github.com/your-username/legal-doc-analyzer.git'
      }
    }

    stage('Build Docker Image') {
      steps {
        sh 'docker-compose down --volumes'
        sh 'docker-compose up --build -d'
      }
    }
  }
}
