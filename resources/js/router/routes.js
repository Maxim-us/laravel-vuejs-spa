function page (path) {
  return () => import(/* webpackChunkName: '' */ `~/pages/${path}`).then(m => m.default || m)
}

export default [
  
  { path: '/', name: 'welcome', component: page('homePage.vue') },

  { path: '/login', name: 'login', component: page('auth/login.vue') },
  { path: '/register', name: 'register', component: page('auth/register.vue') },
  { path: '/password/reset', name: 'password.request', component: page('auth/password/email.vue') },
  { path: '/password/reset/:token', name: 'password.reset', component: page('auth/password/reset.vue') },
  { path: '/email/verify/:id', name: 'verification.verify', component: page('auth/verification/verify.vue') },
  { path: '/email/resend', name: 'verification.resend', component: page('auth/verification/resend.vue') },

  { path: '/home', name: 'home', component: page('home.vue') },  
  {
    path: '/settings',
    component: page('settings/index.vue'),
    children: [
      { path: '', redirect: { name: 'settings.profile' } },
      { path: 'profile', name: 'settings.profile', component: page('settings/profile.vue') },
      { path: 'password', name: 'settings.password', component: page('settings/password.vue') }
    ]
  },

  // common pages
  { path: '/about', name: 'about', component: page('about.vue') },
  { path: '/news', name: 'news', component: page('news/index.vue') },
  { path: '/news/:slug', name: 'news-single', component: page('news/single.vue') },

  /*
  * admin panel
  */  
  { path: '/admin', name: 'admin', component: page('admin/index.vue') },

  // news
  { path: '/admin/news', name: 'admin.news', component: page('admin/news/index.vue') },
  { path: '/admin/news/create', name: 'admin.news.create' ,component: page('admin/news/create.vue') },
  { path: '/admin/news/edit/:slug', component: page('admin/news/edit.vue') },  

  // pages
  { path: '/admin/pages', name: 'admin.pages', component: page('admin/pages/index.vue') },
  { path: '/admin/pages/create', name: 'admin.pages.create' ,component: page('admin/pages/create.vue') },
  { path: '/admin/pages/edit/:slug', component: page('admin/pages/edit.vue') },

  // settings page
  { path: '/admin/settings', name: 'admin.settings', component: page('admin/settings/index.vue') },

  /*
  * pages from DB
  */
  { path: '/:slug', component: page('page.vue') },

  // 404
  { path: '*', name: 'page404', component: page('errors/404.vue') }
]
