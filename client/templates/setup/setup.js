Template.setup.events({
    'submit .setup-form': function(event, template){
      event.preventDefault();
      var emailVar = template.find('#register-email').value;
      var passwordVar = template.find('#register-password').value;

      Accounts.createUser({
          email: emailVar,
          password: passwordVar
      });
    }
});