(function() {

  describe('Application', function() {
    it('should exists', function() {
       var app = new Application("#test-template");
       app.should.be.an.instanceof(Application);
    });

    it('should render handlebars template', function(){
    	var app = new Application("#test-template");
    	app.render({name: "kuba"}).should.equal("<p>kuba</p>");
    });
  });

}).call(this);