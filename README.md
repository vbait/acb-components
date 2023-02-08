# acb-components

## npx lerna bootstrap

## npx lerna run build

<br /><br />

# VSCode recommendation

- install eslint, prettier and stylelint plugins
- add formatter config: `"editor.defaultFormatter": "esbenp.prettier-vscode"` for json, html, css, scss, javascript, javascriptreact, typescript, typescriptreact
- enable formatOnSave
- enable eslint
- enable stylelint

### Example:

```
{
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.formatOnSave": true,
  "eslint.enable": true,
  "css.validate": false,
  "less.validate": false,
  "scss.validate": false,
  "stylelint.config": null,
  "stylelint.validate": ["css", "scss"]
}
```
