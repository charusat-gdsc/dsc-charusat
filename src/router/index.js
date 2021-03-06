import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: () => import( /* webpackChunkName: "home" */ '../views/Home.vue'),
    meta: {
      title: 'Home - DSC CHARUSAT',
      color: '#0277bd',
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      title: 'About - DSC CHARUSAT',
      color: '#0277bd',
    }
  },
  {
    path: '/team',
    name: 'Team',
    component: () => import( /* webpackChunkName: "team" */ '../views/Team.vue'),
    meta: {
      title: 'Team - DSC CHARUSAT',
      color: '#0277bd',
    }
  },
  {
    path: '/team/:id',
    name: 'Team Details',
    component: () => import( /* webpackChunkName: "team-details" */ '../views/Team/TeamDetails.vue'),
    meta: {
      title: 'Team Details - DSC CHARUSAT',
      color: '#0277bd',
    }
  },
  {
    path: '/events',
    name: 'Events',
    component: () => import( /* webpackChunkName: "events" */ '../views/Events.vue'),
    meta: {
      title: 'Events - DSC CHARUSAT',
      color: '#0277bd',
    }
  },
  {
    path: '/events/:id',
    name: 'Events-Details',
    component: () => import( /* webpackChunkName: "events-details" */ '../views/Events/EventDetails.vue'),
    meta: {
      title: 'Events - DSC CHARUSAT',
      color: '#0277bd',
    }
  },
  {
    path: '/speakers',
    name: 'Speakers',
    component: () => import( /* webpackChunkName: "speakers" */ '../views/Speakers.vue'),
    meta: {
      title: 'Speakers - DSC CHARUSAT',
      color: '#0277bd',
    }
  },
  {
    path: '/speakers/:id',
    name: 'Speakers-Details',
    component: () => import( /* webpackChunkName: "speakers-details" */ '../views/Speakers/SpeakerDetails.vue'),
    meta: {
      title: 'Speakers - DSC CHARUSAT',
      color: '#0277bd',
    }
  },
  {
    path: '/volunteers',
    name: 'Volunteers',
    component: () => import( /* webpackChunkName: "volunteer" */ '../views/Volunteer.vue'),
    meta: {
      title: 'Volunteers - DSC CHARUSAT',
      color: '#0277bd',
    }
  },
  {
    path: '/partners',
    name: 'Partners',
    component: () => import( /* webpackChunkName: "partners" */ '../views/Partners.vue'),
    meta: {
      title: 'Partners - DSC CHARUSAT',
      color: '#0277bd',
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import( /* webpackChunkName: "contact" */ '../views/Contact.vue'),
    meta: {
      title: 'Contact - DSC CHARUSAT',
      color: '#0277bd',
    }
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: () => import( /* webpackChunkName: "blogs" */ '../views/Blogs.vue'),
    meta: {
      title: 'Blogs - DSC CHARUSAT',
      color: '#0277bd',
    }
  },
  {
    path: '*',
    name: 'redirect',
    redirect: {
      path: '/'
    },
    meta: {
      title: `Redirect `,
      color: "#0277bd",
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    };
  },
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router