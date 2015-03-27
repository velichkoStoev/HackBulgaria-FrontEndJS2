var prompt = require('prompt');
prompt.start();

var users = [
    {
        id: 1,
        name: "John",
        email: "a@a.com"
    },

    {
        id: 2,
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
            }
            case 2:{

            }
            case 3:{
                console.log("Quiting ...");
            }
        }
  });
}


function promptMenu(){
    console.log("-- Menu --");
    console.log("1. List");
    console.log("2. Add");
    console.log("3. Quit");
}

// function add(){
    
// }

function list(){
    console.log("\nListing ...");
    for(var i in users){
        console.log("ID: " + users[i]['id']);
        console.log("Name: " + users[i]['name']);
        console.log("E-mail: " + users[i]['email']);
        console.log();
    }
}
