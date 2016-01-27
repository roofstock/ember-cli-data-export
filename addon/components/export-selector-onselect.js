import Ember from 'ember';
import layout from '../templates/components/export-selector-onselect';

export default Ember.Component.extend({
  layout: layout,
  selectPrompt: 'Export File',

  actions: {
    triggerExport: function(selectedType) {
      this.sendAction('exportData', selectedType);
      this.$('#exportTypes').val('');
    }
  }
});
