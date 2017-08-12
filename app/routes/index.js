import Ember from 'ember';

export default Ember.Route.extend({
    // model() {
    //     return ['Alex', 'Steve']
    // }
    model() {
        return this.store.findAll('post');
    }
});