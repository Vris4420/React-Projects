export function checkEmail(email){
    const errors =[]

    if(email.length === 0){
        errors.push("Required");
    }

    if(!email.endsWith("@webdevsimplified")){
        errors.push("Must end with @webdevsimplified")
    }
    return errors
}

export function checkPassword(password){
    const errors =[]

    if(password.length < 10){
        errors.push("Must be at least 10 characters")
    }

    if(!password.match(/[a-z]/)){
        errors.push("Must include atleast one lowercase letter")
    }

    if(!password.match(/[A-Z]/)){
        errors.push("Must include atleast one uppercase letter")
    }

    if(!password.match(/[0-9]/)){
        errors.push("Must include atleast 1 number")
    }



    return errors
}