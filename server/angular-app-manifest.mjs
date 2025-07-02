
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/about"
  },
  {
    "renderMode": 2,
    "route": "/projects"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1756, hash: 'b38eca3c031fbd4689540605b045bfcb15b9edfbfc93815b32268fb08f2a57e3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 961, hash: 'f2fd8af3ed4785a325f2ebf8b375e29555453f300199d78a9ff071291764237d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 2019, hash: '31eaf9194bb385603f1f73581953ad5710ca06b73020331f4cfaf053da2bf89a', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 2010, hash: 'b4bdfca2c34381e83551de7370d6d6d5fec518bc43c60b0a4796b062f031cd6b', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 2016, hash: 'fa5c0aa16edefafae655cfb58289ad44b9282e1394a35f0491c050eda51953a9', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 23000, hash: '38a4374f4c9d6629f83179405c33da74c006f80f89747205ae9825086cafdf04', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-JSXN2DY3.css': {size: 1208, hash: 'Y8321WuCIUg', text: () => import('./assets-chunks/styles-JSXN2DY3_css.mjs').then(m => m.default)}
  },
};
