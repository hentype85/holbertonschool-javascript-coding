# JavaScript - Web scraping

* Install Node
```
sudo apt-get install -y nodejs
```
* Install semi-standard
```
npm install semistandard --global

semistandard *.js --global
semistandard --fix *.js --global
```

run scripts:
```
./0-readme.js cisfun
./1-writeme.js my_file.txt "Python is cool"
./2-statuscode.js https://intranet.hbtn.io/status
./2-statuscode.js https://intranet.hbtn.io/doesnt_exist
./3-starwars_title.js 1
./3-starwars_title.js 5
./4-starwars_count.js https://swapi-api.hbtn.io/api/films
./5-request_store.js http://loripsum.net/api loripsum
./6-completed_tasks.js https://jsonplaceholder.typicode.com/todos
```
