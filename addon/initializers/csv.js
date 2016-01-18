export function initialize(container, application) {
  application.inject('route', 'csv', 'service:csv');
  application.inject('component', 'csv', 'service:csv');
  application.inject('controller', 'csv', 'service:csv');
}

export default {
  name: 'csv',
  initialize: initialize
};
