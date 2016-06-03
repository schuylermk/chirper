import Ember from 'ember';

export default Ember.Controller.extend({
  showAppName: true,
  appName: "Chirper",

  addNewChorp: false,
  actions: {
    newChorp: function() {
      this.set('addNewChorp', true);
    }
  }


});
