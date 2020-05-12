const path = require('path');

module.exports = {
  prompts: [
    {
      name: 'name',
      type: 'string',
      message: 'Project name',
      default: 'www.fqdn.com',
      store: true,
    },
    {
      name: 'description',
      type: 'string',
      message: 'Project description',
      default: ({ name }) => `Repository for ${name}.`,
    },
    {
      name: 'url',
      type: 'string',
      message: 'Project URL',
      default: ({ name }) => `https://${name}`,
    },
    {
      name: 'hub',
      message: 'Where is the project’s repository?',
      type: 'list',
      choices: [
        { name: 'GitLab', value: 'git@gitlab.com:studiometa' },
        { name: 'GitHub', value: 'git@github.com:studiometa' },
      ],
      default: 0,
    },
    {
      name: 'repository',
      type: 'string',
      message: 'Project repository',
      default: ({ name, hub }) => `${hub}/${name}.git`,
    },
    {
      name: 'features',
      message: 'Choose features to add',
      type: 'checkbox',
      choices: [{ name: 'i18n', value: 'i18n' }],
      default: [],
    },
  ],
  templateData() {
    const { features } = this.answers;
    const i18n = features.includes('i18n');

    return {
      i18n,
    };
  },
  actions() {
    const actions = [
      {
        type: 'add',
        files: '**',
        filters: {
          '*.DS_Store': false,
          '/node_modules/*': false,
          '/vendor/*': false,
          '.gitlab-ci.yml': this.answers.hub.includes('gitlab.com'),
        },
        templateDir: 'template',
      },
      {
        type: 'move',
        patterns: {
          _gitignore: '.gitignore',
          '_package.json': 'package.json',
        },
      },
    ];

    // Remove GitLab of Github files based on the selected hub
    if (this.answers.hub.includes('github.com')) {
      actions.push({
        type: 'move',
        patterns: {
          _github: '.github',
        },
      });
    } else {
      actions.push({
        type: 'remove',
        files: '_github/',
      });
    }

    return actions;
  },
  async completed() {
    // Init Git and install NPM dependencies
    this.gitInit();
    await this.npmInstall({ npmClient: 'npm' });

    // Display useful informations
    const { chalk } = this;
    const isNewFolder = this.outDir !== process.cwd();
    const relativeOutFolder = path.relative(process.cwd(), this.outDir);
    const tab = '    ';

    console.log();
    console.log(chalk`${tab}🎉 {bold Successfully created project} {cyan ${this.answers.name}}!`);
    console.log();
    console.log(chalk`${tab}{bold To get started:}\n`);

    if (isNewFolder) {
      console.log(chalk`${tab}Go in your project's directory`);
      console.log(chalk`${tab}{cyan cd ${relativeOutFolder}}\n`);
    }

    console.log(chalk`${tab}Create your .env file and fill it`);
    console.log(chalk`${tab}{cyan cp .env.example .env}\n`);
    console.log(chalk`${tab}Start the development server`);
    console.log(chalk`${tab}{cyan npm run dev}\n`);
    console.log(chalk`${tab}🎊 {bold Happy coding!}\n`);
  },
};
