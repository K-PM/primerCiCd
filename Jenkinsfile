pipeline{
    agent any
    environment{
        DOCKER_IMAGE= 'primercicd'
    }
    stages {
        stage('Build') {
            steps {
                script {
                    docker.build(DOCKER_IMAGE, '.')
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    docker.image(DOCKER_IMAGE).inside {
                        sh 'npm install mocha supertest --save-dev'
                        sh 'npm test'
                    }
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    docker.image(DOCKER_IMAGE).run('-d -p 3000:3000')
                }
            }
        }
    }
}