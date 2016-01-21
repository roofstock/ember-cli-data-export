import Ember from 'ember';
import layout from '../templates/components/export-selector-onselect';

export default Ember.Component.extend({
  layout: layout,
  types: Ember.computed(function() {
    return [this.get('selectPrompt'), 'Excel', 'CSV']
  }),
  selectPrompt: 'Export File',

  triggerExport: function() {
    this.sendAction('exportData', this.get('selectedType'));
  }

});
