module.exports = {
  siteMetadata: {
    title: 'The Coffee Blog'
  },

  plugins: [
    'gatsby-plugin-netlify-cms'
  ]
};


collections:
  - name: "blog"
    label: "Blog"
    folder: "src/blog"
    create: true
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}"
    fields:
      - label: "Title"
        name: "title"
        widget: "string"
      - label: "Publish Date"
        name: "date"
        widget: "datetime"
      - label: "Body"
        name: "body"
        widget: "markdown"

