function Application(template_id){
  var source = $(template_id);
  this.template = Handlebars.compile(source.html());
}

Application.prototype.render = function(params){
  return this.template(params);
};