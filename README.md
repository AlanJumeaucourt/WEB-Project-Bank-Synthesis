## WEB Projet TCArgent

How to run this project ?
## Demo

Insert gif or link to demo


## Run Locally with docker

Clone the project

```
  git clone git@github.com:Zouzzou21/WEB-Project-Bank-Synthesis.git
```

Go to the project directory

```
  cd WEB-Project-Bank-Synthesis
```

Run and build the containers

```
  docker-compose up -d
```

The application is avaible at http://localhost:3000


## Known issue

After adding new module on your node app, you need to rebuild the container :

```
docker-compose stop
docker image rm web-project-bank-synthesis-reactjs
docker-compose up
```


## Authors

- [@Zouzzou21](https://github.com/Zouzzou21)
- [@AlanJumeaucourt](https://github.com/AlanJumeaucourt)
- [@Ryad3](https://github.com/Ryad3)
- [@Moovaa2 ](https://github.com/Moovaa2 )
- [@CABANENT](https://github.com/CABANENT)
- [@dkgmgo](https://github.com/dkgmgo)
