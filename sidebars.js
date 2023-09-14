/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

/*
const sidebars = {
  mySidebar: [
    {
      type: 'category',
      label: 'About',
      items: [{ type: 'autogenerated', dirName: 'about' }],
    },
    {
      type: 'category',
      label: 'Node & Validator Guide',
      items: [
        { type: 'autogenerated', dirName: 'node' },
        { type: 'autogenerated', dirName: 'validators' },
      ],
    },
    {
      type: 'category',
      label: 'API',
      items: [{ type: 'autogenerated', dirName: 'api' }],
    },
  ],
};

module.exports = sidebars;
*/

module.exports = {
  /*
   *
   * *********************** Apps & Tools Section *************************
   *
   * This section includes explainer guides and content on common wallets,
   * tools, applications, and services for the Polygon ecosystem.
   *
   * **********************************************************************
   *
   */

  /*
   *
   * ************************* Governance Section *************************
   *
   * This section includes explainer guides and content on the PIP
   * framework and PoS governance.
   *
   * **********************************************************************
   *
   */

  avail: [
    "about/introduction",
    {
      type: "category",
      label: "Get Started",
      link: {
        type: "generated-index",
      },
      collapsed: false,
      items: [
        "about/managing-accounts",
        "about/avail-explorer",
        "about/testnet-faucet",
        "about/light-client-setup",
      ],
    },
    {
      type: "category",
      label: "Run a Node",
      link: {
        type: "generated-index",
      },
      collapsed: false,
      items: [
        "node/node-types",
        {
          type: "category",
          label: "Full Node",
          link: {
            type: "generated-index",
          },
          items: [
            "node/full-node/full-node-binaries",
            "node/full-node/full-node-docker",
          ],
        },
        "node/avail-rpc-node",
        "node/avail-bootstrap-node",
        "node/avail-relay-node",
      ],
    },
    {
      type: "category",
      label: "Become a Validator",
      link: {
        type: "generated-index",
      },
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Run a Validator Node",
          link: {
            type: "generated-index",
          },
          items: [
            "validators/validator-node/validator-binaries",
            "validators/validator-node/validator-docker",
          ],
        },
        "validators/avail-backup-node",
        "validators/avail-upgrade-validator-node",
        "validators/avail-monitoring-validator-node",
        "validators/avail-chilling",
      ],
    },
    {
      type: "category",
      label: "API Reference",
      link: {
        type: "generated-index",
      },
      collapsed: false,
      items: [
        "api/communicating-with-avail",
        {
          type: "category",
          label: "Light Client",
          link: {
            type: "generated-index",
          },
          items: [
            "api/light-client/avail-light-client-overview",
            "api/light-client/embedding-the-light-client",
          ],
        },
        "api/use-case-validiums",
      ],
    },
  ],

};
