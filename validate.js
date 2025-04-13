// validate.js
const grammar = {
  ...require('./rules/basic_types'),
  ...require('./rules/cell_reference'),
  ...require('./rules/expressions'),
  ...require('./rules/identifier'),
  ...require('./rules/operators'),
};

console.log('Exported rule names:', Object.keys(grammar));
