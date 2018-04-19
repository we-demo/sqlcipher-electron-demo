# sqlcipher-electron-demo

Demo for [cross-sqlcipher](https://github.com/fritx/cross-sqlcipher) used with Electron

- [x] MacOS (verified)
- [ ] Windows (needs feedback..)
- [ ] CIs

Related issues:

- [cross-sqlcipher#4](https://github.com/fritx/cross-sqlcipher/issues/4)
- [unix-sqlcipher#4](https://github.com/fritx/unix-sqlcipher/issues/4)
- [win-sqlcipher#2](https://github.com/fritx/win-sqlcipher/issues/2)

## Steps

```sh
npm install
npm start # prints items in window
open test.db # requires password..
```

## Troubleshootings

- `Cannot read property 'pause' of undefined` while `npm install`

  ```sh
  npm imstall -g npm@5.5.1
  npm install
  ```

  Ref https://github.com/npm/npm/issues/18520#issuecomment-338547789

## How it works

Say something..?

```json
{
  "name": "sqlcipher-electron-demo",
  "main": "main.js",
  "scripts": {
    "postinstall": "npm run rebuild",
    "rebuild": "electron-rebuild && npm run sqlcipher",
    "sqlcipher": "cd node_modules/cross-sqlcipher && npm i --runtime=electron --target=1.8.4 --dist-url=https://atom.io/download/electron",
    "start": "electron ."
  },
  "devDependencies": {
    "electron": "=1.8.4",
    "electron-rebuild": "^1.7.3"
  },
  "dependencies": {
    "cross-sqlcipher": "0.0.2"
  }
}
```
