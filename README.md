# :coffee: Next App debugging

```js
//  Add breakpoints at somewhere in Node.js process
export function getStaticProps() {
  debugger;
  let msg = 'Hello';
  msg += ' Next js';

  return {
    props: {
      data: msg,
    },
  };
}
```

### Option :one: - Chome DevTools

1. Update `package.json` at secion `script`

```json
"scripts": {
	// xxx
  	"dev": "NODE_OPTIONS='--inspect' next dev"
  	// xxx
},
```

2. At the terminal run Next App, then open Google chome and goto `http://localhost:3000`

```bash
$ yarn dev

# Debugger listening on ws://127.0.0.1:9229/0cf90313-350d-4466-a748-cd60f4e47c95
# For help, see: https://nodejs.org/en/docs/inspector
# ready - started server on http://localhost:3000
```

3. Open new tab in Google Chrome and goto `chrome://inspect`
4. At the `Remote Target` section click `inspect`
5. In Google Chrome from #2 click `refresh` button

---

### Option :two: - VSCode debugger

1. Create a file named `.vscode/launch.json` with this content

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "attach",
      "name": "Launch Program",
      "skipFiles": ["<node_internals>/**"],
      "port": 9229
    }
  ]
}
```

2. At the terminal run Next App, then open Google chome and goto `http://localhost:3000`

```bash
$ yarn dev

# Debugger listening on ws://127.0.0.1:9229/0cf90313-350d-4466-a748-cd60f4e47c95
# For help, see: https://nodejs.org/en/docs/inspector
# ready - started server on http://localhost:3000
```

3. VSCode - select `Debug: Start Debugging`

---

### :eyeglasses: Troubleshoot

In case `yarn dev` not working let run `killall -9 node` and run `yarn dev` again

```bash
Port xxxx is already in use.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
~/p/n/nextjs-test ❯❯❯ killall -9 node                                                               ✘ 1 main ✖ ✱ ◼
~/p/n/nextjs-test ❯❯❯ yarn dev
```

---

Check out https://nextjs.org/docs/advanced-features/debugging
