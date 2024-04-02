// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '6b6t Wiki',
  tagline: '6builders 6tools wiki',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://6b6t-wiki.vercel.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '6b6t', // Usually your GitHub org/user name.
  projectName: '6b6t-wiki', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'The 6b6t wiki',
        logo: {
          alt: '6b6t wiki logo',
          src: 'img/logo.jpg',
        },
        items: [
          { to: '/docs/introduction', label: 'Wiki', position: 'left' },
          {
            href: 'https://github.com/therealrealguy/6b6twiki/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Useful links',
            items: [
              {
                label: '6b6t.org Official Website',
                to: 'https://www.6b6t.org/',
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/Em4AAcjXvD',
              },
              {
                href: 'https://github.com/therealrealguy/6b6twiki/',
                label: 'GitHub',
                position: 'right',
              },
            ],
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 6b6t wiki, Inc.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
