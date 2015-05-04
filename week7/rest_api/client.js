function getStudents(){
    $.ajax({
        url: "http://127.0.0.1:1337/students/",
        method: 'get',
        dataType: 'jsonp',
        success: function(data){
            listStudents(data);
        },
        error: function(request, status, error){
            alert(error);
        }
    });
}

function postStudents(){
    var student = {
        id: $('#id').val(),
        name: $('#name').val(),
        email: $('#email').val()
    };

    $.ajax({    
        method: 'post',
        url: "http://127.0.0.1:1337/students/",
        dataType: 'json',
        data: {
            id: student.id,
            name: student.name,
            email: student.email
        }
    });
}

function listStudents(students){
    $("#students_list").empty();
    students.forEach(function(student){
        buildStudentEntry(student);
    });
}

function buildStudentEntry(student){
    var tr = $('<tr>');
    tr.append('<td><a href="http://127.0.0.1:1337/students/' + student.id +'">' + student.id + '</a></td>');
    tr.append('<td>' + student.name +'</td>');
    tr.append('<td>' + student.email +'</td>');

    $("#students_list").append(tr);
}

$( document ).ready(function() {
    $('#btnList').click(function(){
        getStudents();
    });

    $('#btnSubmit').click(function(){
        postStudents();
    });     
});