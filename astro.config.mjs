import {defineConfig} from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({site:'https://chrome.guidehollow.com/',output:'static',trailingSlash:'always',integrations:[sitemap({filter:(u)=>!['/privacy/','/disclosure/'].includes(new URL(u).pathname)})]});
