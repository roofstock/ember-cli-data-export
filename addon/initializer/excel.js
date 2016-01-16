export function initialize(container, application) {
  application.inject('route', 'excel', 'service:excel');
  application.inject('component', 'excel', 'service:excel');
  application.inject('controller', 'excel', 'service:excel');
}

export default {
  name: 'excel',
  initialize: initialize
};
