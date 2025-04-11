import mermaid from 'mermaid';

const mermaidChart = (code) => {
    try {
        mermaid.parse(code, { suppressErrors: true });
        return `<div class="mermaid">${code}</div>`;
    } catch ({ str, hash }) {
        return `<pre>${str}</pre>`;
    }
};

// TODO: Inject this value from outside
const isDarkMode = false;

const mermaid_plugin = (md, config) => {
    mermaid.initialize({
        theme: isDarkMode ? 'default' : 'dark',
        darkMode: isDarkMode,
        fontFamily: 'monospace',
        // fontFamily: 'ui-monospace',
        // altFontFamily: 'monospace',
        startOnLoad: true,
        ...config,
    });

    // Register icon packs asynchronously
    mermaid.registerIconPacks([
        {
            name: 'logos',
            loader: () =>
                fetch(
                    'https://unpkg.com/@iconify-json/logos@1/icons.json'
                ).then((res) => res.json()),
        },
    ]);

    md.mermaid = mermaid;

    const original = md.renderer.rules.fence || function (tokens, idx, options, env, self) {
        return self.renderToken(tokens, idx, options);
    };

    md.renderer.rules.fence = (tokens, idx, options, env, self) => {
        const token = tokens[idx];
        const code = token.content.trim();
        if (token.info === 'mermaid') {
            return mermaidChart(code);
        }

        return original(tokens, idx, options, env, self);
    };
};

export default mermaid_plugin;