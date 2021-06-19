# Flashcard api

## Development
### When initialize the project
At first, there's no `package*.json`, so run this command to create a dummy `node` container:
```
docker-compose -f docker-compose.yml -f docker-compose.base.yml up -d --build
```

After that, you can exec into the container and init npm project, .etc
```
docker exec -it fc_app sh
npm init
.etc
```

Next time, just spin up container with this command:
```
docker-compose up -d --build
```

Or if you don't need to build:
```
docker-compose up -d
```

After finish, stop containers:
```
docker-compose down
```
