import last from 'lodash/fp/last';

export function breakdown(txt) {
	const decorators = ['"', "'"];
	const as = txt
		.split('\n')
		.flatMap(str => str.split(','))
        .map(o => o.trim())
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

export function setup(as, value) {
	const seperators = ['1', '3'].includes(value) ? ',\n' : '\n';
	const quote = ['1', '2'].includes(value) ? '"' : '';
	return as.map(a => `${quote}${a}${quote}`).join(seperators)
}
