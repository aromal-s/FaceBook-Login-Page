$(document).ready(function(){
    $("#sign-up").validate({
        rules:{
            fname:{
                required:true
            },
            sname:{
                required:true
            },
            emailnum:{
                required:true,
                email:true
            },
            password:{
                required:true,
                minlength:4,
                maxlength:8
            },
            day:{
                required:true
            },
            month:{
                required:true
            },
            year:{
                required:true
            },
            gender:{
                required:true
            }
        },
        messages:{
            password:{
                minlength:"Please enter minimum 4 characters",
                maxlength:"Please no enter more than 8 characters"
            }
        }
        
    })
})