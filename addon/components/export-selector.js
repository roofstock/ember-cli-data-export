import { computed } from '@ember/object';
import Component from '@ember/component';
import layout from '../templates/components/export-selector';

export default Component.extend({
  layout: layout,
  types: computed(function() {
    return [this.get('selectPrompt'), 'Excel', 'CSV'];
  }),
  selectedType : null,
  actionText: 'Export',
  selectPrompt: 'Export File',

  actions: {
    triggerExport: function() {
      this.sendAction('exportData', this.get('selectedType'));
    }
  }
});
