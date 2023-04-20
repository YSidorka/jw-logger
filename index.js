const { parentPort } = require('worker_threads');

function postMessage(str) {
  if (parentPort) {
    parentPort?.postMessage(str);
  } else {
    console.log(str);
  }
}

module.exports = {
  postMessage
};
