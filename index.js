import last from '@lodash/last';

const textarea = document.getElementById('inputText');
const outPutText = document.getElementById('outputText');
const mode = document.getElementById('mode');


function breakdown(txt) {
	const decorators = ['"', "'"];
	const as = txt
		.split('\n')
		.flatMap(str => str.split(','))
		.map(str => {
			const chars = str.split('');
			if (decorators.includes(chars[0])) {
				chars.shift();
			}
			
			if (decorators.includes(last(chars))) {
				chars.pop();
			}
			
			return chars.join('');
		});
	return as;
}

function setup(as) {
	const seperators = ['1', '3'].includes(mode.value) ? ',\n' : '\n';
	const quote = ['1', '2'].includes(mode.value) ? '"' : '';
	return as.map(a => `${quote}${a}${quote}`).join(seperators)
}

textarea.addEventListener('input', function(event) {
  outPutText.value = setup(breakdown(textarea.value));;
});
