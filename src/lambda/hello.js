const toc = require('markdown-toc');

export function handler(event, context, callback) {
	console.log(event.body);
	callback(null, {
		statusCode: 200,
		body: JSON.stringify(toc(event.body))
	});
}
