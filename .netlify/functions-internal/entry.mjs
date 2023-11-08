import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_d7ca8ec3.mjs';
import './server.mjs';
import './chunks/pages/index_62251eb8.mjs';
import './chunks/astro_843c9753.mjs';
import 'html-escaper';
import 'clsx';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/generic_81e7795c.mjs');
const _page1  = () => import('./chunks/index_5da4e764.mjs');const pageMap = new Map([["node_modules/.pnpm/astro@3.4.3_typescript@5.2.2/node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
