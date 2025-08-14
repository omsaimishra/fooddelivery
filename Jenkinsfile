pipeline {
    agent any
    stages {
        stage('Clone code') {
            steps {
                git branch: 'main', url: 'https://github.com/YOUR_USERNAME/YOUR_REPO.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t frontend-test .'
                }
            }
        }
    }
}
