Tabs = new Mongo.Collection(null),

Template.tabs.created = function(){

  Tabs.remove({});
  if(!this.data || !this.data.tabs){
    return;
  }

  Tabs.remove({group: this.data.group});

  var self = this;
  this.data.tabs.forEach(function(tab){
    tab.group = self.data.group;
    Tabs.insert(tab);
  });
  
}

Template.tabs.events({
  "click .show-tab": function(event){
    Tabs.update({group: this.group}, {$set: {active: 0}}, {multi: true})

    
    Tabs.update(
      { $and: [
        {group: this.group},
        {name: this.name}
      ]}, 
      { $set: {
        active: 1,
      }}
    );
  },
});

Template.tabs.helpers({
  tabs: function(){
    return Tabs.find({group: this.group});
  }
});