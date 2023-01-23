# Sample typescript

For test generate log to console with module `tslog`

## What you can do

1. Change message in 3 types such as **pretty(text color)**, **json**, **unformat**  
    you can change with env called `LOG_TYPE`
2. Export message to console or file with apply to env called `LOG_TO_FILE` and path to stored in `LOG_PATH`
3. Change frequency write message with env called `LOGGER_DELAY`

## How to use

- Install Dev dependencies.

    ```bash
    npm ci # or use npm install
    ```

- To compile typescript to commonJS in `build` folder.

    ```bash
    npx tsc
    ```

- Run dev serve with `nodemon`.

    ```bash
    npm run start:dev
    ```

## Fast Demo with docker

You can run nodejs in docker for fasttrack to demo this service.

    ```bash
    $ docker run -it --rm -v $(pwd):/app node:15-alpine /bin/ash
    $ cd /app
    $ npm ci
    # this line use nodemon module to auto-reload script on-flight
    $ npm run start:dev
    ```
