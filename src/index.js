import { setup, breakdown} from './quote.js';

const textarea = document.getElementById('inputText');
const outPutText = document.getElementById('outputText');
const mode = document.getElementById('mode');


textarea.addEventListener('input', function(event) {
  outPutText.value = setup(breakdown(textarea.value), mode.value);;
});
