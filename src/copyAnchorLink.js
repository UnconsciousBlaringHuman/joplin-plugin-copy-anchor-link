module.exports = {
	default: function(context) {
		return {
			plugin: function (markdownIt, _options) {
				const pluginId = context.pluginId;
				markdownIt.core.ruler.push('anchorIcon', state => {
					const tokens = state.tokens
					for (let idx = 0; idx < tokens.length; idx++) {
						const token = tokens[idx]
						if (token.type !== 'heading_open') { continue }
						state.tokens[idx+1].children.push(Object.assign(new state.Token('span_open', 'span', 1), {attrs:[['class','copy-anchor-icon']]}));
						state.tokens[idx+1].children.push(Object.assign(new state.Token('html_inline', '', 0), {content: " "}));
						["oi", "of", "li", "lh", "gi", "gh", "gf"].forEach(name => {
							state.tokens[idx+1].children.push(Object.assign(new state.Token('span_open', 'span', 1), {attrs:[['class',`cai-${name}`]]}));
							state.tokens[idx+1].children.push(Object.assign(new state.Token('html_inline', '', 0), {
								content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill="gainsboro" d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg>`
							}))
							state.tokens[idx+1].children.push(new state.Token('span_close', 'span', -1));
							state.tokens[idx+1].children.push(Object.assign(new state.Token('html_inline', '', 0), {content: " "}))
						})
						state.tokens[idx+1].children.push(new state.Token('span_close', 'span', -1));
					}
				})
			},
			assets: function () {
				return [
					{ name: 'anchorLinkView.js'  },
					{ name: 'anchorLinkView.css' }
				]
			},
		};
	}
}
