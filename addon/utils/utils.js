export default function optionize(options, defaultConfig){
  if (Object.prototype.toString.call( options ) === "[object Object]") {
    options = options || {};
  } else {
    options = {};
  }

  for (let property in defaultConfig) {
    options[property] = options[property] || defaultConfig[property];
  }

  return options;
}
