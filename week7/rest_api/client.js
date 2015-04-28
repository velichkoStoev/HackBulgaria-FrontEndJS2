function getStudents(){
    $.ajax({
        url: "http://127.0.0.1:1337/students/",
        method: 'get',
        dataType: 'jsonp',
        success: function(data){
            var result = JSON.stringify(data);
            alert(result);
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
            var result = JSON.stringify(data);
            alert(result);
        },
        error: function(request, status, error){
            alert(error);
        }
    });
}

$( document ).ready(function() {
    $('#btnList').click(function(){
        getStudents();
    });

    $('#btnSubmit').click(function(){
        postStudents();
    });     
});