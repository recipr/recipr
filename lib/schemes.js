SimpleSchema.messages({
  passwordMissmatch: 'Passwords does not match',
  "regEx password": [
    { msg: "Your password is to weak"}
  ]
})

Schemes = {};

Schemes.Profile = new SimpleSchema({
  sitename: {
    type: String,
    regEx: /^[a-z0-9A-Z_]{3,15}$/
  },
  bio: {
    type: String,
    optional: true
  },
});

Schemes.User = new SimpleSchema({
  username: {
    type: String,
    regEx: /^[a-z0-9A-Z_]{3,15}$/
  },
  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },
  password: {
    type: String,
    regEx: /^[a-z0-9A-Z_]{3,15}$/
  },
  passwordConfirm: {
    type: String,
    custom: function(){
      if (this.value != this.field('password').value){
        return "passwordMissmatch"
      }
    }
  },
  profile: {
    type: Schemes.Profile,
    optional: true
  }
});

Schemes.Register = Schemes.User.pick([
  'username', 
  'email', 
  'password',
  'passwordConfirm',
]);