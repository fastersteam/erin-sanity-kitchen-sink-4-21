export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '606ff6f52923d5523b8aa4a5',
                  title: 'Sanity Studio',
                  name: 'erin-sanity-kitchen-sink-4-21-studio',
                  apiId: '937ec12e-b6f0-45cb-b1f9-cc48c29e7ae8'
                },
                {
                  buildHookId: '606ff6f565818c5d6c9179d6',
                  title: 'Blog Website',
                  name: 'erin-sanity-kitchen-sink-4-21',
                  apiId: '4df7a52c-27ad-48c0-8851-d2ef3f51a92d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/erinjerri/erin-sanity-kitchen-sink-4-21',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://erin-sanity-kitchen-sink-4-21.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
