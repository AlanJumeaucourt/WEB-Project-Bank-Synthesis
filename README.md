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

Change the HOST_URL to your IP address
```
HOST_URL=http://192.168.32.1

```

Build the containers

```
  ./dcomp build
```

Run the project when it's finish to build

```
  ./dcomp up -d
```


When it's finish 
The application is avaible at <YOUR_IP>:3000


## Known issue

After adding new module on your node app, you need to rebuild the container :

```
docker-compose stop
docker image rm web-project-bank-synthesis-reactjs
./dcomp up -d
```


## Authors

- [@Zouzzou21](https://github.com/Zouzzou21)
- [@AlanJumeaucourt](https://github.com/AlanJumeaucourt)
- [@Ryad3](https://github.com/Ryad3)
- [@Moovaa2 ](https://github.com/Moovaa2 )
- [@CABANENT](https://github.com/CABANENT)
- [@dkgmgo](https://github.com/dkgmgo)
