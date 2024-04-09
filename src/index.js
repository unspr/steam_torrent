import { setup, breakdown} from './quote.js';

const textarea = document.getElementById('inputText');
const outPutText = document.getElementById('outputText');
const mode = document.getElementById('mode');

function updateOutPut() {
  outPutText.value = setup(breakdown(textarea.value), mode.value);
}

textarea.addEventListener('input', updateOutPut);
mode.addEventListener('change', updateOutPut);