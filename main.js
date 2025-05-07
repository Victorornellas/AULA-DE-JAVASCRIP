class User {
    constructor({ email }){
        this.email = email
    }

    sendMessage(){
        console.log("Menssagem enviado para:", this.email)
    }
}

let user = new User({ email: "victorhugo@email.com"})
user.sendMessage()