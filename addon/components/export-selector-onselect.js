import Component from '@ember/component';
import layout from '../templates/components/export-selector-onselect';

export default Component.extend({
  layout: layout,
  selectPrompt: 'Export File',

  actions: {
    triggerExport: function(selectedType) {
      this.sendAction('exportData', selectedType);
      this.$('#exportTypes').val('');
    }
  }
});
