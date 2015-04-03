var Page = function(element){
    this.element = element;
}
    
Page.prototype.render = function(){
    return this.element.render();
}

var Paragraph = function(text){
    this.text = text;
}

Paragraph.prototype.render = function(){
    return '<p>' + this.text + '</p>';
}

var Div = function(){
    this.children = [];
}

Div.prototype.render = function(){
    var string = '';
    var pattern = '<div>{}</div>\n';
    for(var i = 0; i < this.children.length; i++){
        string += '\t' + this.children[i].render();
    }
    if(string !== ''){
        return pattern.replace('{}', '\n' + string + '\n');
    }

    return pattern.replace('{}', '');
    
}

Div.prototype.addChild = function(p){
    this.children.push(p);
    return this;
}

var Table = function(arg){
    this.collection = arg;
}

Table.prototype.render = function(){
    if(this.collection instanceof Array){
        var keys = this.collection[0];

        this.collection.shift(); 

        var temp = {};

        for(var i = 0; i < keys.length; i++){
            temp[keys[i]] = [];
        }

        for(var j = 0; j < keys.length; j++){
            for(var i = 0; i < this.collection.length; i++){
                temp[keys[j]].push(this.collection[i][j]);
            }   
        }

        this.collection = temp;
    }

    var output = '';
    output += '<table>\n';
    output += '\t<thead>\n';
    output += '\t<tr>\n';

    for (var property in this.collection) {
        if (this.collection.hasOwnProperty(property)) {
           output += '\t\t<th>' + property + '</th>\n'
        }
    }

    output += '\t</tr>\n';
    output += '\t</thead>\n\n';

    keys = Object.keys(this.collection);

    n = this.collection[keys[0]].length;

    for(var k = 0; k < n; k++){ // 3
        output += '\t<tr>\n';
        for(var i = 0; i < keys.length; i++){ //name, age
            output += '\t\t<td>' + this.collection[keys[i]][k]+ '</td>\n';                
        }
        output += '\t</tr>\n';
    }

    output += '\t</tbody>\n';
    output += '</table>\n';
    return output;
}

// var p = new Paragraph("yeah!");
// p.render();

// var div = new Div();
// div.addChild(new Paragraph("I am inside that div"));
// div.addChild(new Paragraph("I am inside that div too"));
// div.render();

// var div = new Div();
// div.addChild(new Div());
// div.addChild(new Div());
// console.log(div.render());

var tableData = {
  "name": ["Ivo", "Rado", "Maria"],
  "age": [22, 24, 22]
}

// var tableData = [ ["name", "age"], ["Ivo", 22], ["Rado", 24], ["Maria", 22] ];1

var table = new Table(tableData);
console.log(table.render());

// var p = new Paragraph("Rolling in the deep");
// var div = new Div();

// div
//   .addChild(new Div())
//   .addChild(new Div())
//   .addChild(p);

// var page = new Page(div);

// console.log(page.render());