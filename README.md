# Getting Started with Vite

## Development

To get a local copy of the code, clone it using git:

```
git clone https://github.com/Ricardo-Caceres/auto-complete-component.git
cd auto-complete-component
```

Then install the dependencies:

```
npm i or pnpm install

```

Now, you can start a local web server by running:

```
pnpm dev or pnpm run dev
```

And then open http://localhost:5173 to view it in the browser.

#### Available Scripts

In this project, you can run the following scripts:

| Script       | Description                                                                               |
| ------------ | ----------------------------------------------------------------------------------------- |
| pnpm dev     | Runs the app in the development mode start dev server, aliases: `vite dev`, `vite serve`. |
| pnpm build   | Build for production.                                                                     |
| pnpm preview | Locally preview production build                                                          |

## Available Scripts

In the project directory, you can run:

### `pnpm dev`

Runs the app in the development mode.\
Open [http://localhost:5173/](http://localhost:5173/) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `pnpm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run preview`

Runs the production build locally.\

## Folder Structure

No configuration or complicated folder structures, just the files you need to build your app:

```
vite-template-react
├── node_modules
├── public
│   ├── vite.svg
└── src
│   ├── assets
│   │   ├── reat.svg
    ├── components
    │   ├── AutoComplete.tsx
    ├── App.css
    ├── App.tsx
    ├── index.css
    ├── main.tsx
    └── vite-env.d.ts
├── .gitignore
├── index.html
|── LICENSE
├── package.json
|── pnpm-lock.yaml
|── questions.md
├── README.md
|── tsconfig.json
|── tsconfig.node.json
├── vite.config.js
```

## Credits

Vite Template React is built and maintained by Ricardo Cáceres.

## License

This project is licensed under the terms of the [MIT license](https://github.com/Ricardo-Caceres/auto-complete-component.git/blob/main/LICENSE).
