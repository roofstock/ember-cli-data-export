import Ember from 'ember';
import layout from '../templates/components/export-selector';

export default Ember.Component.extend({
  layout: layout,
  types: [
    {id: 'excel', 'display': 'Excel'},
    {id: 'csv', 'display': 'CSV'}
  ],
  actionText: 'Export',
  selectPrompt: 'Export File',

  actions: {
    triggerExport: function() {
      this.sendAction('exportData', this.get('selectedType'));
    }
  }
});
