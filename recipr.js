Meteor.startup(function () {
  //Restore default settings;
  if (Meteor.isServer) {
    var defaultSettings = {
      gui: {
        showIntro: {
          niceName: 'Show Intro',
          value: true,
        },
        showSections: {
          niceName: 'Show Sections',
          value: false,
        },
      } 
    }

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
                niceName: setting.niceName,
                value: setting.value,
              });
            }
          }
        }
      }
    }
  }
});