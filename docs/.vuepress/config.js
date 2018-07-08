module.exports = {
    title: '',
    description: '',
    dest: '/overview/intro',
    themeConfig: {
      logo: 'https://pbs.twimg.com/profile_images/910603053396484096/thf39ASW_400x400.jpg',
      searchMaxSuggestions: 10,
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
            '/scss/practices',
            '/scss/elements',
            '/scss/mixins',
            '/scss/variables'
           ]
        }
      ]
    }
  }