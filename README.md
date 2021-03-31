# Sample typescript
For test generate log to console with module `tslog`

## How to use
- Install Dev dependencies.
```bash
$ npm ci # or use npm install
```
- To compile typescript to commonJS in `build` folder.
```bash
$ npx tsc
```
- Run dev serve with `nodemon`.
```bash
$ npm run start:dev
```

## Fast Demo with docker
You can run nodejs in docker for fasttrack to demo this service.  
```bash
$ docker run -it --rm -v $(pwd):/app node:15-alpine /bin/ash
$ cd /app
$ npm ci
$ npm run start:dev # this line use nodemon module to auto-reload script on-flight
```
