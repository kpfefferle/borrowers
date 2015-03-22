import Ember from 'ember';

export default Ember.Controller.extend({
  possibleStates: ["borrowed", "returned"],
  contentDidChange: function() {
    console.log('Called when we add or remove an article.');
  }.observes('model.[]'),
  stateDidChange: function() {
    console.log('Callen when the state property changes for any of the articles.');
  }.observes('model.@each.state')
});
