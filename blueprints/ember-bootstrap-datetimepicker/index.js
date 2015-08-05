module.exports = {
  normalizeEntityName: function() {},
<<<<<<< HEAD
  afterInstall: function() {}
=======

  afterInstall: function() {
    return this.addAddonToProject('ember-cli-moment-shim', '~0.6.1').then(function() {
      return this.addBowerPackageToProject('eonasdan-bootstrap-datetimepicker', '~4.14.30');
    }.bind(this));
  }
>>>>>>> a3d4c9fff9d1b2b4fe41d5f70774d557c1b562e9
};
