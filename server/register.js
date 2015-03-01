Meteor.methods({
  register: function(data){
    check(data, Schemes.Register);
    
    var defaultSettings = {
      gui: {
        showIntro: {
          label: 'recipe.settings.show-intro',
          value: true,
        },
        showSections: {
          label: 'recipe.settings.show-sections',
          value: false,
        },
        showSteps: {
          label: 'recipe.settings.show-steps',
          value: false,
        },
      } 
    };

    Accounts.createUser({
      username: data.username,
      email: data.email,
      password: data.password,
      profile: defaultSettings
    });

    return data;
  }
});
