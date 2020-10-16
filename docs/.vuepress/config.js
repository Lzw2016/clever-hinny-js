module.exports = {
    // title: 'Hello VuePress',
    // description: 'Just playing around',
    // themeConfig: {
    //     nav: [
    //         { text: 'External', link: 'https://google.com', target:'_self', rel:'' },
    //         { text: 'Guide', link: '/guide/', target:'_blank' }
    //     ]
    // },
    plugins: [
        [
            'vuepress-plugin-typedoc',
            // plugin options
            {
                // list of input files relative to docusaurus.config.js
                inputFiles: [
                    './types',
                    './core',
                    './data-jdbc',
                    './meta-data',
                    './mvc',
                ],

                // out directory relative to docs folder (defaults to `api`)
                out: 'api',

                // options for auto generated sidebars.json (pass `null` to skip generation completely)
                sidebar: {
                    // display full names with module path if applicable - (defaults to 'false')
                    fullNames: false,
                    // the parent category label for sidebar - (defaults to `none` - no parent category)
                    parentCategory: 'none',
                },

                // include additional TypeDoc plugins in addition to the markdown plugin (optional)
                // plugin: ['typedoc-plugin-markdown'],

                // Pass in any additional TypeDoc options (see typedoc --help)
                mode: 'modules',

                // theme: "default",

                disableOutputCheck: true,
            },
        ],
    ],
};