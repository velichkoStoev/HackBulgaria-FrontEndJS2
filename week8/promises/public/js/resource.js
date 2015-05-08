function Resource(url){
    this.url = url;
};

Resource.prototype.query = function() {
   return Q($.get(this.url));
};

Resource.prototype.create = function(data){
    return Q($.ajax({
        url: this.url,
        method: 'post',
        data: data,
        dataType: 'json'
    }));
}

Resource.prototype.view = function(id){
    return Q($.get(this.url + id));
}

Resource.prototype.update = function(id, data){
    return Q($.ajax({
        url: this.url + id,
        method: 'put',
        data: data,
        dataType: 'json'
    }));  
}

Resource.prototype.delete = function(id){
    return Q($.ajax({
        url: this.url + id,
        method: 'delete'
    }));
}

var remoteServer = 'http://192.168.0.66:3000/api/students/';

var res = new Resource(remoteServer);
// res.query().then(function(data){
//     console.log(data);
// });

//examples

// res.create({
//     email: 'bugav@abv.bg',
//     name: 'mn bugav'
// }).then(function(msg){
//     console.log(msg);
// });

// res.view("554cea4fc23b62f14096f05b").then(function(data){
//     console.log(data);
// });

// res.update("554cea4fc23b62f14096f05b", {
//     name: 'kekeek'
// }).then(function(data){
//     console.log(data);
// });

// res.delete("554cea50c23b62f14096f05c").then(function(data){
//     console.log(data);
// });