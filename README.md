# CKEditorInspector Neos Plugin

The CKEditorInspector is a Neos UI Plugin to include the [CKEditor 5 Inspector](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/development-tools.html#ckeditor-5-inspector) inside Neos. This is very helpful when debugging CKEditor5 plugins.


<img src="https://user-images.githubusercontent.com/190777/59579198-039f2400-90cc-11e9-9003-e8b8b0cca16f.png">

## Installation

```bash
composer require sandstorm/ckeditorinspector
```

## Usage

The inspector is included only in Development context; and automatically pops up at the bottom of the screen.

In case the inspector does not load and you get cryptic JS errors, clear the local storage using `window.localStorage.clear()` and reload.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

To set up the development environment, run the following:

```bash
cd Resources/Private/Inspector
nvm use
yarn
npm run watch
npm run build
```

## License

[GPL-2.0-or-later](https://choosealicense.com/licenses/gpl-2.0/)
