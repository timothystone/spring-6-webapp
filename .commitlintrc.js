module.exports = {
    extends: [
        '@commitlint/config-conventional'
    ],
    plugins: ['commitlint-plugin-function-rules'],
    rules: {
        'scope-enum': [0],
        'body-empty': [2, 'never'],
        'function-rules/scope-enum': [1, 'always', (parsed) => {
          const scopes = [
            'api', 
            'checkstyle', 
            'config',
            'commitlint',
            'deps',
            'docker', 
            'github', 
            'gitlab', 
            'helm',
            'husky', 
            'maven',
            'semrel',
            'sonar',
            'swagger'
          ];

          if (!parsed.scope || scopes.some( (scope) => new RegExp('^' + scope).test(parsed.scope) )) {
            return [true];
          }
          return [false, 'Is this a new scope? Considering adding it to the config. The current scopes are:\n    ' + scopes.join(', ')];
        }
      ]
    }
};
