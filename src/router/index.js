import Vue from 'vue'
import VueRouter from 'vue-router'
import navConfig from './nav.config'

Vue.use(VueRouter)

const loadDocs = function(path) {
  return r => require.ensure([], () =>
    r(require(`@/docs/${path}.md`))
  )
}

const registerRoute = (navConfig) => {
  const routes = []
  const navs = navConfig.data
  navs.forEach((nav, index) => {
    if (!nav.list) return
    nav.list.forEach(page => {
      addRoute(page)
    })
  })
  function addRoute(page) {
    const route = {
      path: '/' + page.path,
      meta: {
        title: page.title || page.name,
        description: page.description
      },
      component: loadDocs(page.path)
    }

    routes.push(route)
  }

  return routes
}

let routes = registerRoute(navConfig)

routes.unshift({
  path: '/index',
  component: () => import('@/components/j-index.vue')
})
routes.push({
  path: '/404',
  component: () => import('@/components/j-404.vue')
})

routes = routes.concat([{
  path: '/',
  redirect: '/index'
}, {
  path: '*',
  redirect: '/404'
}])

console.log(routes)

const router = new VueRouter({
  mode: 'hash',
  // base: __dirname,
  routes
})

router.afterEach(routes => {
  // https://github.com/highlightjs/highlight.js/issues/909#issuecomment-131686186
  // Vue.nextTick(() => {
  //   const blocks = document.querySelectorAll('pre code:not(.hljs)');
  //   Array.prototype.forEach.call(blocks, hljs.highlightBlock);
  // });
  // const data = title[routes.meta.lang];
  // for (let val in data) {
  //   if (new RegExp('^' + val, 'g').test(routes.name)) {
  //     document.title = data[val];
  //     return;
  //   }
  // }
  // document.title = 'Element';
  // ga('send', 'event', 'PageView', routes.name)
})

export default router
