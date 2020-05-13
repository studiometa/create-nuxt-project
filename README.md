# Create Nuxt Project

[![NPM Version](https://img.shields.io/npm/v/@studiometa/create-nuxt-project.svg?style=flat-square)](https://www.npmjs.com/package/@studiometa/create-nuxt-project)
[![Dependency Status](https://img.shields.io/david/studiometa/create-nuxt-project.svg?label=deps&style=flat-square)](https://david-dm.org/studiometa/create-nuxt-project)
[![devDependency Status](https://img.shields.io/david/dev/studiometa/create-nuxt-project.svg?label=devDeps&style=flat-square)](https://david-dm.org/studiometa/create-nuxt-project?type=dev)

> A generator to kickstart your Nuxt project in a few seconds! ⚡

## Usage

Run the following command to bootstrap a WordPress project using Studio Meta's tools and workflows:

```bash
npx @studiometa/create-nuxt-project <project-name>
```

## Documentation

This tool will generate a Nuxt project setup with our favorite tools at [Studio Meta](https://github.com/studiometa). It includes:

- The [@nuxtjs/axios](https://axios.nuxtjs.org/) module
- The [@nuxtjs/dotenv](https://github.com/nuxt-community/dotenv-module) module
- The [@nuxtjs/pwa](https://pwa.nuxtjs.org/) module
- [Tailwind CSS](https://tailwindcss.com/) via [@nuxtjs/tailwindcss](https://github.com/nuxt-community/nuxt-tailwindcss) and our custom configuration [@studiometa/tailwind-config](https://github.com/studiometa/tailwind-config)
- Linting via [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) with our custom configurations [@studiometa/eslint-config](https://github.com/studiometa/eslint-config) and [@studiometa/prettier-config](https://github.com/studiometa/prettier-config)
- Linting via [StyleLint](https://stylelint.io/) and [Prettier](https://prettier.io/) with our custom configuration [@studiometa/stylelint-config](https://github.com/studiometa/stylelint-config)
- Tests with [Jest](https://jestjs.io/) and [@vue/test-utils](https://vue-test-utils.vuejs.org/) 
- [GitLab CI](https://docs.gitlab.com/ee/ci/) or [Github Actions](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/about-github-actions) to run tests


## Contributing

This project's branches are managed with [Git Flow](https://github.com/petervanderdoes/gitflow-avh), every feature branch must be merged into develop via a pull request.