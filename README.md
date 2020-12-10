# Eli

[![CI Status](https://github.com/lucka-me/eli/workflows/CI/badge.svg)](https://github.com/lucka-me/eli/actions?query=workflow%3ACI "CI Workflow")  
[![NPM version](https://img.shields.io/npm/v/@lucka-labs/eli?logo=npm)](https://www.npmjs.com/package/@lucka-labs/eli "npm package page") 
[![GitHub](https://img.shields.io/github/license/lucka-me/eli)](./LICENSE "License")


Elegant way to build elements.

## Usage

Install with npm,

```sh
$ npm install @lucka-labs/eli -D
```

Then build elements with functioning autocompelete:

```ts
@import { eli } from '@lucka-labs/eli';

const box = eli('div', {
    innerHTML: 'Hello World!'
});

document.body.append(box);
```