export function initialize() {
  var application = arguments[1] || arguments[0];
  application.inject('route', 'csv', 'service:csv');
  application.inject('component', 'csv', 'service:csv');
  application.inject('controller', 'csv', 'service:csv');
}

export default {
  name: 'csv',
  initialize: initialize,
};
