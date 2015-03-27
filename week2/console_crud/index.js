var prompt = require('prompt');
prompt.start();

var users = [
    {
        id: "1",
        name: "John",
        email: "a@a.com"
    },

    {
        id: "2",
        name: "Gosho",
        email: "yeah@bg.com"
    }
];

getOption(); 

function getOption(){
    promptMenu();
    console.log('Choice:');  
    prompt.get(['choice'], function (err, result) {
        switch(parseInt(result.choice)){
            case 1:{
                list();
                break;
            }
            case 2:{
                add();
                break;
            }
            case 3:{
                get();
                break;
            }
            case 4:{
                remove();
                break;
            }
            case 5:{
                update();
                break;
            }
            case 6:{
                console.log("Quiting ...");
            }
        }       
    });
}


function promptMenu(){
    console.log("-- Menu --");
    console.log("1. List");
    console.log("2. Add");
    console.log("3. Get");
    console.log("4. Remove");
    console.log("5. Update");
    console.log("6. Quit");
}

function add(){
    console.log("Adding user ...");

    var user = new Object();

    prompt.get(['user_id', 'user_name', 'user_email'], function (err, result) {
        user.id = result.user_id;
        user.name = result.user_name;
        user.email = result.user_email;

        users.push(user);
        getOption();
    });
}

function list(){
    console.log("\nListing ...");
    for(var i in users){
        showUserInfo(users[i]);
    }
    getOption();
}

function showUserInfo(user){
    console.log("ID: " + user['id']);
    console.log("Name: " + user['name']);
    console.log("E-mail: " + user['email']);
    console.log();
}

function get(){
    console.log("Getting user ...");
    console.log("Input id: ");

    prompt.get(['id'], function (err, result) {
       for(var i in users){
           if(users[i].id == result.id){
               showUserInfo(users[i]);
           }
       }
       getOption();
    });
}

function remove(){
    console.log("Getting user ...");
    console.log("Input id: ");

    prompt.get(['id'], function (err, result) {
       for(var i in users){
           if(users[i].id == result.id){
               users.splice(i, 1);
           }
       }
       getOption();
    });
}

function update(){
    console.log("Updating user ...");
    console.log("Input id: ");

    prompt.get(['id'], function (err, result) {
       for(var i in users){
           if(users[i].id == result.id){
               prompt.get(['user_id', 'user_name', 'user_email'], function (err, result) {
               users[i].id = result.user_id;
               users[i].name = result.user_name;
               users[i].email = result.user_email;
               getOption();
            });
           }
       }
    });
}
