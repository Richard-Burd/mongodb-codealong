# mongodb-codealong
This is a codealong with Shaun (Net Ninja) so I can figure out MongoDB...stay tuned for some cool graphics!
https://www.youtube.com/playlist?list=PL4cUxeGkcC9jpvoYriLI0bY8DOgWZfi6u

Left Off here:
https://www.youtube.com/watch?v=5dhoyoet0Fk&list=PL4cUxeGkcC9jpvoYriLI0bY8DOgWZfi6u&index=14


## MongoDB Installation
MongoDB was installed per these instructions here:
https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/


##Dependencies

1.) `npm init --yes` Installs npm
2.) `npm install mongoose --save`
3.) `npm install mocha --save`

##Mocha
Be sure to add this to the package.json
```
"repository": {
  "type": "git",
  "url": "git+https://github.com/Richard-Burd/mongodb-codealong.git"
},
```
...this is needed to make the Mocha tests work properly



##Commands
Conncet to the server:
1.) `redburd@ubuntu ~/Desktop/dev/3/mongodb-codealong (master) $ node test/connection.js`
2.) `npm run test`
