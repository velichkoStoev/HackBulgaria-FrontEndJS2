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
    var student_id = $('#id').val();
    var student_name = $('#name').val();
    var student_email = $('#email').val();

    $.ajax({    
        method: 'post',
        url: "http://127.0.0.1:1337/students/",
        dataType: 'json',
        data: {
            id: student_id,
            name: student_name,
            email: student_email
        },
        success: function(data){
            alert('Success!');
        },
        error: function(request, status, error){
            alert(error);
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
    tr.append('<td>' + student.id +'</td>');
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