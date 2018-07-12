// const mdmkdn = require('markdown-magic-hosted');

export function handler(event, context, callback) {
	console.log(event.body);
	callback(null, {
		statusCode: 200,
		body: JSON.stringify({ msg: leftpad('Hello, World!', 50) })
	});
}
