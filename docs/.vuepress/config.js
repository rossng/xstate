module.exports = {
  title: 'XState Docs',
  base: '/docs/',
  description:
    'Documentation for XState: State Machines and Statecharts for the Modern Web',
  ga: 'UA-129726387-1',
  markdown: {
    toc: { includeLevel: [2, 3] }
    // config: md => {
    //   md.use(mdCodesandboxPlugin, {
    //     directory: 'sandboxes',
    //   })
    // }
  },
  themeConfig: {
    lastUpdated: 'Last Updated',
    repo: 'davidkpiano/xstate',
    docsDir: 'docs',
    editLinks: true,
    logo: '/logo.svg',
    algolia: {
      apiKey: 'ddd397151aad9f0662ca36e5b39fed61',
      indexName: 'xstatejs'
    },
    nav: [
      { text: 'API', link: 'https://xstate.js.org/api' },
      { text: 'Visualizer', link: 'https://statecharts.github.io/xstate-viz' },
      { text: 'Chat', link: 'https://gitter.im/statecharts/statecharts' },
      { text: 'Community', link: 'https://spectrum.chat/statecharts' }
    ],
    sidebar: [
      {
        title: 'About',
        children: ['/about/concepts', '/about/goals']
      },
      {
        title: 'Guides',
        children: [
          '/guides/start',
          '/guides/installation',
          '/guides/machines',
          '/guides/states',
          '/guides/statenodes',
          '/guides/events',
          '/guides/transitions',
          '/guides/hierarchical',
          '/guides/parallel',
          '/guides/effects',
          '/guides/actions',
          '/guides/guards',
          '/guides/context',
          '/guides/activities',
          '/guides/communication',
          '/guides/delays',
          '/guides/final',
          '/guides/history',
          '/guides/ids',
          '/guides/interpretation',
          '/guides/typescript'
        ]
      },
      {
        title: 'Recipes',
        children: ['/recipes/react', '/recipes/vue', '/recipes/rxjs']
      },
      {
        title: 'Packages',
        children: [
          'packages/xstate-react/',
          'packages/xstate-graph/',
          'packages/xstate-fsm/',
          'packages/xstate-immer/'
        ]
      },
      {
        title: 'Patterns',
        children: ['/patterns/sequence']
      },
      {
        title: 'Examples',
        children: ['/examples/todomvc', '/examples/calculator']
      }
    ]
  }
};