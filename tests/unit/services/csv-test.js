import { moduleFor, test } from 'ember-qunit';

moduleFor('service:csv', 'Unit | Service | csv', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

// Replace this with your real tests.
test('#jsonToCsv - with valid Array of Arrays, it should return an string with CSV format', function(assert) {
  const service = this.subject();
  const array = [
    [
      'name',
      'last_name',
    ],
    [
      'Dale',
      'Cooper'
    ],
  ];
  const expectedCSV = '"name","last_name"\r\n"Dale","Cooper"\r\n';
  const options = {
    separator: ',',
    withSeparator: false,
  };

  assert.deepEqual(service.jsonToCsv(array, options), expectedCSV);
});
