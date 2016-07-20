'use strict';
exports.decorateConfig = config => {
	return Object.assign({}, config, {
		css: `
			${config.css || ''}
			.tab_textActive {
				font-weight: bold;
				font-size: 1.3em;
			}
		`
	});
};
