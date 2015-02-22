
Meteor.startup(function () {
  //Restore default settings;
  if (Meteor.isServer) {
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

    for (var type in defaultSettings) {
      if (defaultSettings.hasOwnProperty(type)) {
        for (var key in defaultSettings[type]) {
          if (defaultSettings[type].hasOwnProperty(key)) {
            var savedSetting = Settings.findOne({type: type, key: key});
            if(!savedSetting){
              var setting = defaultSettings[type][key];
              Settings.insert({  
                type: type,
                key: key,
                label: setting.label,
                value: setting.value,
              });
            }
          }
        }
      }
    }
  }

  if(Meteor.isClient){
    TAPi18n.setLanguage('de');
  }
});