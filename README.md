# Eli

Elegant way to build elements.

## Usage

Install with npm,

```sh
$ npm install @lucka-labs/eli -D
```

Then build elements:

```ts
@import { eli } from '@lucka-labs/eli';

const box = eli('div', {
    innerHTML: 'Hello World!'   // Autocompelete should works fine
});

document.body.append(box);
```