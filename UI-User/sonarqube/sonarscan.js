const scanner = require('sonarqube-scanner');

scanner(
    {
        serverUrl: 'http://localhost:9000',
        token: "sqp_cdf6590be81187b34da0d6e6414a30b74ab434a5",
        options: {
            'sonar.projectName': 'healistry-ui-user-sonar',
            'sonar.projectDescription': 'Here I can add a description of my project',
            'sonar.projectKey': 'healistry-ui-user-sonar',
            'sonar.projectVersion': '0.0.1',
            'sonar.exclusions': '',
            'sonar.sourceEncoding': 'UTF-8',
        }
    },
    () => process.exit()
)