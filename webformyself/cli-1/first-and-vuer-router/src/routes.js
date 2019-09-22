import VueRouter from 'vue-router'
import Home from './pages/Home'
// import Cars from './pages/Cars'
import Test from './pages/Test'
import Error from './pages/Error'
// import Car from './pages/Car'
import CarFull from './pages/CarFull'

// lazy loading of component more faste speed of app
const Cars = resolve => {
  require.ensure(['./pages/Cars.vue'], () => {
    resolve(
      require('./pages/Cars.vue')
    )
  })
};
const Car = resolve => {
  require.ensure(['./pages/Car.vue'], () => {
    resolve(
      require('./pages/Car.vue')
    )
  })
};

export  default new VueRouter({
  routes: [
    {
      path: '*',
      component: Error
    },
    {
      path: '/car/:id',
      component: Car,
      children: [
        {
          path: 'full', // localhost:8080/car/10/full
          component: CarFull,
          name: 'carFull',
        }
      ]
    },
    {
      path: '',
      component: Home
    },
    {
      path: '/cars',
      component: Cars
    },
    {
      path: '/test',
      component: Test
    },
    {
      path: '/none',
      redirect: '/'
    }
  ],
  mode:'history',
  scrollBehavior(to, from, savedPosition) {
    if(savedPosition) {
      return savedPosition
    }
    if(to.hash){
      return {selector:  to.hash}
    }
    return {
      x: 0,
      y: 0,
    }
  }
})
