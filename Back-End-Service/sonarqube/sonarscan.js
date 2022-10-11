const scanner = require('sonarqube-scanner');

scanner(
    {
        serverUrl: 'http://localhost:9000',
        token: "sqp_c81edab2c2540612890adf39b0f5f5ffe404f283",
        options: {
            'sonar.projectName': 'healistry-back-end-sonar',
            'sonar.projectDescription': 'Here I can add a description of my project',
            'sonar.projectKey': 'healistry-back-end-sonar',
            'sonar.projectVersion': '0.0.1',
            'sonar.exclusions': '',
            'sonar.sourceEncoding': 'UTF-8',
        }
    },
    () => process.exit()
)