const leftpad = require('left-pad');

export function handler(event, context, callback) {
	console.log(event);
	callback(null, {
		statusCode: 200,
		body: JSON.stringify({ msg: leftpad('Hello, World!', 50) })
	});
}
