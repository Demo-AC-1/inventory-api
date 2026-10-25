pipeline {
  agent any
  environment { IMAGE = 'registry.acme.example/inventory/inventory-api' }
  stages {
    stage('Build') { steps { sh 'docker build -t $IMAGE:$BUILD_NUMBER .' } }
    stage('Push')  { steps { sh 'docker push $IMAGE:$BUILD_NUMBER' } }
    stage('Deploy') { steps { sh 'kubectl set image deployment/inventory-api app=$IMAGE:$BUILD_NUMBER' } }
  }
}
