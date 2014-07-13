Ember.TEMPLATES['components/recipr-header'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n");
  return buffer;
  
});Ember.TEMPLATES['components/recipr-ingredient'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("<form class=\"inputGroup\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "update", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\r\n    <div>\r\n       ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("text"),
    'class': ("input"),
    'type': ("text"),
    'name': ("quantity"),
    'placeholder': ("Quantity"),
    'value': ("quantity")
  },hashTypes:{'valueBinding': "STRING",'class': "STRING",'type': "STRING",'name': "STRING",'placeholder': "STRING",'value': "ID"},hashContexts:{'valueBinding': depth0,'class': depth0,'type': depth0,'name': depth0,'placeholder': depth0,'value': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n    </div>\r\n    <div>\r\n       ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("text"),
    'class': ("input"),
    'type': ("text"),
    'name': ("unit"),
    'placeholder': ("Unit"),
    'value': ("unit")
  },hashTypes:{'valueBinding': "STRING",'class': "STRING",'type': "STRING",'name': "STRING",'placeholder': "STRING",'value': "ID"},hashContexts:{'valueBinding': depth0,'class': depth0,'type': depth0,'name': depth0,'placeholder': depth0,'value': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n    </div>\r\n    <div>\r\n       ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("text"),
    'class': ("input"),
    'type': ("text"),
    'name': ("name"),
    'placeholder': ("Name"),
    'value': ("name")
  },hashTypes:{'valueBinding': "STRING",'class': "STRING",'type': "STRING",'name': "STRING",'placeholder': "STRING",'value': "ID"},hashContexts:{'valueBinding': depth0,'class': depth0,'type': depth0,'name': depth0,'placeholder': depth0,'value': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n    </div>\r\n    <div>\r\n        <button type=\"button\" class=\"btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "remove", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">X</button>\r\n    </div>\r\n</form>\r\n");
  return buffer;
  
});Ember.TEMPLATES['components/recipr-tags'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n        <span ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'data-tag': ("tag.id")
  },hashTypes:{'data-tag': "ID"},hashContexts:{'data-tag': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class=\"tag\">\r\n            ");
  stack1 = helpers._triageMustache.call(depth0, "tag.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            <span class=\"icon\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeTag", "tag", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">x</span>\r\n        </span>\r\n    ");
  return buffer;
  }

  data.buffer.push("<label class=\"input\">\r\n    ");
  stack1 = helpers.each.call(depth0, "tag", "in", "tags", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("newTag"),
    'value': ("newTag")
  },hashTypes:{'class': "STRING",'value': "ID"},hashContexts:{'class': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n</label>\r\n");
  return buffer;
  
});Ember.TEMPLATES['components/recipr-upload'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.FileInput", {hash:{
    'name': ("cover"),
    'type': ("file"),
    'class': ("file"),
    'action': ("getFile"),
    'onEvent': ("change")
  },hashTypes:{'name': "STRING",'type': "STRING",'class': "STRING",'action': "STRING",'onEvent': "STRING"},hashContexts:{'name': depth0,'type': depth0,'class': depth0,'action': depth0,'onEvent': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n");
  stack1 = helpers._triageMustache.call(depth0, "value", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});Ember.TEMPLATES['partials/ingredients'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n  <div class=\"row\">\r\n    ");
  data.buffer.push(escapeExpression((helper = helpers['recipr-ingredient'] || (depth0 && depth0['recipr-ingredient']),options={hash:{
    'remove': ("removeIngredient"),
    'name': ("ingredient.name"),
    'unit': ("ingredient.unit"),
    'quantity': ("ingredient.quantity"),
    'ingredient': ("ingredient")
  },hashTypes:{'remove': "STRING",'name': "ID",'unit': "ID",'quantity': "ID",'ingredient': "ID"},hashContexts:{'remove': depth0,'name': depth0,'unit': depth0,'quantity': depth0,'ingredient': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "recipr-ingredient", options))));
  data.buffer.push("\r\n  </div>\r\n");
  return buffer;
  }

  stack1 = helpers.each.call(depth0, "ingredient", "in", "section.ingredients", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n<div class=\"row\">\r\n  <form ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":inputGroup ingredientError:error")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addIngredient", "section", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">\r\n      <div>\r\n         ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'value': ("newIngredient"),
    'valueBinding': ("text"),
    'class': ("input"),
    'type': ("text"),
    'name': ("ingredient"),
    'placeholder': ("Add Ingredient")
  },hashTypes:{'value': "ID",'valueBinding': "STRING",'class': "STRING",'type': "STRING",'name': "STRING",'placeholder': "STRING"},hashContexts:{'value': depth0,'valueBinding': depth0,'class': depth0,'type': depth0,'name': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n      </div>\r\n      <div>\r\n          <button type=\"submit\" class=\"btn\">+</button>\r\n      </div>\r\n  </form>\r\n</div>\r\n");
  return buffer;
  
});Ember.TEMPLATES['partials/preparation'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n  <div class=\"row\">\r\n    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("input"),
    'name': ("name"),
    'placeholder': ("Section name"),
    'value': ("section.name")
  },hashTypes:{'class': "STRING",'name': "STRING",'placeholder': "STRING",'value': "ID"},hashContexts:{'class': depth0,'name': depth0,'placeholder': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n  </div>\r\n");
  return buffer;
  }

  data.buffer.push("<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":tab showPreparation:active")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" >\r\n");
  stack1 = helpers['if'].call(depth0, "hasMultipleSections", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n<div class=\"row\">\r\n  ");
  data.buffer.push(escapeExpression((helper = helpers.textarea || (depth0 && depth0.textarea),options={hash:{
    'class': ("textarea"),
    'name': ("preparation"),
    'placeholder': ("Section name"),
    'value': ("section.preparation")
  },hashTypes:{'class': "STRING",'name': "STRING",'placeholder': "STRING",'value': "ID"},hashContexts:{'class': depth0,'name': depth0,'placeholder': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\r\n</div>\r\n");
  return buffer;
  
});Ember.TEMPLATES['recipes'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n  <section class=\"row\">\r\n    <div class=\"wrap row\">\r\n      <div class=\"toggle\">\r\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("btn")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "recipes.ingredients", options) : helperMissing.call(depth0, "link-to", "recipes.ingredients", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("btn")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "recipes.preparation", options) : helperMissing.call(depth0, "link-to", "recipes.preparation", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n      </div>\r\n      <div class=\"tabs\">\r\n        <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":tab showIngredients:active")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" >\r\n          ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "partials/ingredients", options) : helperMissing.call(depth0, "partial", "partials/ingredients", options))));
  data.buffer.push("\r\n        </div>\r\n          ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "partials/preparation", options) : helperMissing.call(depth0, "partial", "partials/preparation", options))));
  data.buffer.push("\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push("Ingredients");
  }

function program4(depth0,data) {
  
  
  data.buffer.push("Preparation");
  }

  data.buffer.push("<div class=\"header\">\r\n  <div class=\"cover\">\r\n      <img class=\"coverImage\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("cover")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n  </div>\r\n  <div class=\"wrap row\">\r\n      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("input iBig"),
    'name': ("name"),
    'placeholder': ("Recipe name"),
    'value': ("name")
  },hashTypes:{'class': "STRING",'name': "STRING",'placeholder': "STRING",'value': "ID"},hashContexts:{'class': depth0,'name': depth0,'placeholder': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n  </div>\r\n  <div class=\"wrap row\">\r\n      ");
  data.buffer.push(escapeExpression((helper = helpers['recipr-upload'] || (depth0 && depth0['recipr-upload']),options={hash:{
    'class': ("coverUpload"),
    'upload': ("onCoverChange"),
    'value': ("Cover Image")
  },hashTypes:{'class': "STRING",'upload': "STRING",'value': "STRING"},hashContexts:{'class': depth0,'upload': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "recipr-upload", options))));
  data.buffer.push("\r\n  </div>\r\n</div>\r\n");
  stack1 = helpers.each.call(depth0, "section", "in", "sections", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n<div class=\"wrap row bigRow\">\r\n  <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addSection", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" type=\"button\" class=\"btn addSection\" >add Section</button>\r\n</div>\r\n<div class=\"wrap bigRow\">\r\n    ");
  data.buffer.push(escapeExpression((helper = helpers['recipr-tags'] || (depth0 && depth0['recipr-tags']),options={hash:{
    'tags': ("tags"),
    'add': ("addTag"),
    'remove': ("removeTag")
  },hashTypes:{'tags': "ID",'add': "STRING",'remove': "STRING"},hashContexts:{'tags': depth0,'add': depth0,'remove': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "recipr-tags", options))));
  data.buffer.push("\r\n</div>\r\n<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saceRecipe", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"save btn bFull\">Publish</button>\r\n");
  return buffer;
  
});