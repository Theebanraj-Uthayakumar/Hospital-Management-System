const scanner = require('sonarqube-scanner');

scanner(
    {
        serverUrl: 'http://localhost:9000',
        token: "sqp_01c0d930644ad65d0f1f4a02b2d115df24af01d5",
        options: {
            'sonar.projectName': 'healistry-ui-admin-sonar',
            'sonar.projectDescription': 'Here I can add a description of my project',
            'sonar.projectKey': 'healistry-ui-admin-sonar',
            'sonar.projectVersion': '0.0.1',
            'sonar.exclusions': '',
            'sonar.sourceEncoding': 'UTF-8',
        }
    },
    () => process.exit()
)