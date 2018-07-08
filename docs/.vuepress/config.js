module.exports = {
    title: '',
    description: '',
    themeConfig: {
      logo: 'https://pbs.twimg.com/profile_images/910603053396484096/thf39ASW_400x400.jpg',
      searchMaxSuggestions: 10,
      nav: [
        { text: 'Introduction', link: '/' },
        { text: 'Components', link: '/guide/' }
      ],
      sidebar: [
        {
          title: 'Components',
          collapsable: false,
          children: [
            './components/alerts',
            './components/buttons',
            './components/cards',
            './components/inputs',
            './components/tables'
          ]
        },
        {
          title: 'SCSS',
          collapsable: false,
          children: [
            '/scss/elements',
            '/scss/mixins',
            '/scss/variables'
           ]
        }
      ]
    }
  }