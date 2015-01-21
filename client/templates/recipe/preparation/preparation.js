Template.recipePreparation.events({
  "focusout .preparation-edit": function(event, template){
    var content = event.target.innerHTML;

    if(content.length === 0){
      Steps.remove({sectionId: this._id, order: 1});
    } else {
      Steps.update(
        {
          sectionId: this._id,
          order: 1
        },{ $set: { 
          content: content,
        }},
        {
        upsert: true
        }
      );
    }
   
    return false;
  }
});

Template.recipePreparation.helpers({
  cleanContent: function(){
    var content = '';
    var firstStep = Steps.findOne({sectionId: this._id, order: 1});
    if(firstStep){
      content = firstStep.content;
    }
    return content.replace(/<br\s*\/?>/mg,"\n"); 
  }
});