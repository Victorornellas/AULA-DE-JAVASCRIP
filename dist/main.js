"use strict";

class User {
  constructor(_ref) {
    let {
      email
    } = _ref;
    this.email = email;
  }
  sendMessage() {
    console.log("Menssagem enviado para:", this.email);
  }
}
let user = new User({
  email: "victorhugo@email.com"
});
user.sendMessage();