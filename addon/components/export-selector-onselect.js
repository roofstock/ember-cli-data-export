import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ExportSelectorOnselect extends Component {
  get selectPrompt() {
    return this.args.selectPrompt || 'Export File';
  }

  @action
  triggerExport(event) {
    let selectedType = event.target.value;
    if (this.args.exportData) {
      this.args.exportData(selectedType);
    }
  }
}
