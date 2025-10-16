# Example of how to use ik-woker with robot-loader

This is a minimal set of code to run the ik-worker.
It is made from vite's default React template.
The only program you need to write is [`App.jsx`](./src/App.jsx).

## How to ran
```
pnpm install
pnpm build
```
for a browser on localhost `pnpm dev`. 
for the other hosts, copy all files under `dist/` and run your HTTPS server

This uses A-Frame and ...
1. `@ucl-nuee/robot-loader`:  
   building a tree of link structures from URDF, registration, and more
2. `@ucl-nuee/ik-cd-worker`:  
   IK worker and its interfaces
3. `@ucl-nuee/nova2`: assets containing URDF and meshes
4. `@ucl-nuee/jaka-zu5`: same as above

See [`package.json`](./package.json) for details.

This is built by `vite`, and copy assets and wasm using `viteStaticCopy`.
See [`vite.config.js`](./vite.config.js).
