
pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'primercicd'
        DOCKER_CONTAINER = 'primercicd'
        DOCKER_PORT = '3000'
    }

    stages {
        stage('Checkout') {
            steps {
                // Clona el repositorio desde GitHub
                git branch: 'main', url: 'https://github.com/K-PM/primerCiCd.git'
            }
        }
        
        stage('Build Docker Image') {
            steps {
                script {
                    // Elimina cualquier proceso utilizando el puerto especificado
                    sh 'fuser -k ${DOCKER_PORT}/tcp || true'
                    // Construye la imagen Docker
                    sh 'docker build -t ${DOCKER_IMAGE} .'
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    // Elimina cualquier contenedor Docker con el nombre especificado
                    sh 'docker rm -f ${DOCKER_CONTAINER} || true'
                    // Ejecuta el contenedor Docker
                    sh 'docker run -d --name ${DOCKER_CONTAINER} -p ${DOCKER_PORT}:${DOCKER_PORT} ${DOCKER_IMAGE}'
                }
            }
        }
    }

