import Ember from 'ember';

export default Ember.Controller.extend({
    
    home: Ember.computed('currentRouteName',function(){    
        if(this.get('currentRouteName') === 'home'){
          return true;
        }
        return false;
      })
});
