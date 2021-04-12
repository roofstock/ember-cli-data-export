import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ExportSelector extends Component {
  @tracked selectedType;

  get actionText() {
    return this.args.actionText || 'Export';
  }

  get selectPrompt() {
    return this.args.selectPrompt || 'Export File';
  }

  get types() {
    return [this.selectPrompt, 'Excel', 'CSV'];
  }

  @action
  triggerExport() {
    if (this.args.exportData) {
      this.args.exportData(this.selectedType);
    }
  }
}
