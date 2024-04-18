import last from 'lodash/fp/last';

export function breakdown(txt) {
	const decorators = ['"', "'"];
	const as = txt
		.split('\n')
		.flatMap(str => str.split(','))
        .map(o => o.trim())
		.filter(Boolean)
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

export function setup(as, seperator, quote) {
	return as.map(a => `${quote}${a}${quote}`).join(seperator)
}
