import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Carolina University Branding',
      items: [
        'Carolina University Branding/University Seals',
        'Carolina University Branding/Colors',
      ],
    },
    {
      type: 'category',
      label: 'Athletics Branding',
      items: [
        'Athletics Branding/- Athletics Logos',
        'Athletics Branding/- Athletics Colors',
      ],
    },
    'Typography',
    'Letterhead',
    'Email Signatures',
    'powerpoint-template',
    'Virtual Backgrounds',
    {
      type: 'category',
      label: 'Branding Guidelines',
      items: [
        'Branding Guidelines/Athletic Brand Management',
        'Branding Guidelines/Logo Standards',
        'Branding Guidelines/Name and Seal Guidelines',
      ],
    },
  ],
};

export default sidebars;
