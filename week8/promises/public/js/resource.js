function Resource(url){
    this.url = url;
};

Resource.prototype.query = function() {
   return Q($.ajax({
        url: this.url,
        method: 'get'
    }));
};

Resource.prototype.create = function(data){
    return Q($.ajax({
        url: this.url,
        method: 'post',
        data: data
    }));
}

Resource.prototype.view = function(id){
    return Q($.ajax({
        url: this.url + '/id',
        method: 'get'
    }));
}

Resource.prototype.update = function(id, data){
    return Q($.ajax({
        url: this.url + '/id',
        method: 'put',
        data: data
    }));  
}

Resource.prototype.delete = function(id){
    return Q($.ajax({
        url: this.url + '/id',
        method: 'delete'
    }));
}