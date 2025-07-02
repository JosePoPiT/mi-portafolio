
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/mi-portafolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/mi-portafolio"
  },
  {
    "renderMode": 2,
    "route": "/mi-portafolio/about"
  },
  {
    "renderMode": 2,
    "route": "/mi-portafolio/projects"
  },
  {
    "renderMode": 2,
    "route": "/mi-portafolio/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/mi-portafolio",
    "route": "/mi-portafolio/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1770, hash: '7b1f8410c63ca9e9e6d36d5024e6ed09693ba27ce46d43b433a6c861d0285f02', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 975, hash: 'a6d3fd756477f9f41ed63e74f5ced3031f610ffa81ab904d4744211bb2a5be2e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 2030, hash: '5dee5d1b238ae45e293ee9232cd8fc2cd877603762b5c051c108cebe0d2fa0d4', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 2033, hash: '483e6b4c74dd484b5bb2f94fe8cce6f2ed3e707ff335cf28d50defad40a42118', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 2024, hash: '8c2e60974870e8e0f9f7178ebe5b089af6fc416bec5d7a704636e00ee3fca8ea', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 23014, hash: '63153c97f4d3f30ff7a34584d43b8804979021a0930ea01118685c9f587084ce', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-JSXN2DY3.css': {size: 1208, hash: 'Y8321WuCIUg', text: () => import('./assets-chunks/styles-JSXN2DY3_css.mjs').then(m => m.default)}
  },
};
