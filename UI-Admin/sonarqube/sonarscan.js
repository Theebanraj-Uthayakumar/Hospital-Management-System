const scanner = require('sonarqube-scanner');

scanner(
    {
        serverUrl: 'http://localhost:9000',
        token: "sqp_794fd846f8521090deaf315d56cfe5148a7a29bb",
        options: {
            'sonar.projectName': 'healistry-ui-admin-new-sonar',
            'sonar.projectDescription': 'Here I can add a description of my project',
            'sonar.projectKey': 'healistry-ui-admin-new-sonar',
            'sonar.projectVersion': '0.0.2',
            'sonar.exclusions': '',
            'sonar.sourceEncoding': 'UTF-8',
        }
    },
    () => process.exit()
)