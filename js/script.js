$("#contactForm").validate({
    rules :{
            fname:{
                required: true,
                 minlength: 3,
        },
            lname:{
                required: true,
                minlength: 3,
        },
            email:{
                required:true,
                email:true
        },
            password:{
                required:true,
        },
            c_password:{
                required:true
        },
    },
    messages:{
            fname:{
                required:"Please enter a first name",
                minlenght:"Please enter at 3 char", 
        },
            lname:{
                required:"Please enter a last name",
                minlenght:"Please enter at 3 char",
        },
            email:{
                required:"Please enter the email",
                email:"Please valid email",
        },
            password:{
                required: "Please enter the Password",
        },
            c_password:{
                required:"Please enter the Confirem Password"
        },
    }
})