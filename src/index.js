import { setup, breakdown} from './quote.js';

const textarea = document.getElementById('inputText');
const outPutText = document.getElementById('outputText');
const seperator = document.getElementById('seperator');
const quote = document.getElementById('quote');

function updateOutPut() {
  outPutText.value = setup(breakdown(textarea.value), seperator.value, quote.value);
}

textarea.addEventListener('input', updateOutPut);
seperator.addEventListener('change', updateOutPut);
quote.addEventListener('change', updateOutPut);