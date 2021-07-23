# Tailwind and Sass Starter Template

A plain starter template for using Tailwind with Sass (without Next, Gatsby, Laravel, etc).

[View on GitHub](https://github.com/mufidu/tailwind-sass-starter)

## Why Sass?

I personally like using Tailwind altogether with Sass because it makes me able to nest the styles. Also, the `@mixin` and `@extend` features really help me to avoid writing the same styles again and again, so the stylesheet is a bit more readable.

## Installation

Use the package manager [npm](https://www.npmjs.com) to use this template, or hit the "Use this template" button above.

```bash
npm install
```

## Running for development

```bash
npm run watch
```

In development CSS output is not optimized since it doesn't make sense to compress and purge everything on every change.

## Building for production

```bash
npm run build
```

In production CSS output is optimized using Tailwind default purging and cssnano compression.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)

<br>

[&larr; back](https://mufidu.com/projects)