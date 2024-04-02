# Website
Built using [Docusaurus](https://docusaurus.io/), and this [tutorial](https://youtu.be/2R53Y7eP45k)

# Removed stuff
src/components/HomepageFeatures/index.js
```js
{
  title: 'Easy to Use',
  Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
  description: (
    <>
      Docusaurus was designed from the ground up to be easily installed and
      used to get your website up and running quickly.
    </>
  ),
},
{
  title: 'Focus on What Matters',
  Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
  description: (
    <>
      Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
      ahead and move your docs into the <code>docs</code> directory.
    </>
  ),
},
{
  title: 'Powered by React',
  Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
  description: (
    <>
      Extend or customize your website layout by reusing React. Docusaurus can
      be extended while reusing the same header and footer.
    </>
  ),
},
```

# Docusaurus documentation

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
