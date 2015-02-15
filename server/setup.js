Meteor.methods({
  setup: function(data){
    check(data, Schemes.Setup);
      
    Accounts.createUser({
      username: data.username,
      email: data.email,
      password: data.password
    });

    return data;
  }
});
