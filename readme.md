# Cypress Postgres Demo

This is my Demo project where you can try out how to connect Cypress with a Postgres Database.

Inside the project I also included a DockerFile and a Docker Compose file

If you want to run the Database just run the command:

```bash
docker compose up
```

This will start the Postgres on your localhost:5432 and the example cypress test will connect to it.

To start testing just run npm test or npm run test:run for headless mode.

