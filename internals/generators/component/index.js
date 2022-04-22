const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add a component to the project.',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Button',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value) ? 'A component or container with this name already exists' : true;
        }

        return 'The name is required';
      },
    },
    {
      type: 'directory',
      name: 'path',
      message: 'Where you like to put this component?',
      basePath: './src',
    },
  ],
  actions: () => {
    const actions = [
      {
        type: 'add',
        path: '../../src/{{path}}/{{kebabCase name}}/index.tsx',
        templateFile: `./component/index.tsx.hbs`,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../src/{{path}}/{{kebabCase name}}/styles.tsx',
        templateFile: `./component/styles.ts.hbs`,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../src/{{path}}/{{kebabCase name}}/tests/index.spec.tsx',
        templateFile: `./component/test.tsx.hbs`,
        abortOnFail: true,
      },
    ];

    return actions;
  },
};
