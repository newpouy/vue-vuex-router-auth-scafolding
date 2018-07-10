import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Signup from './views/Signup.vue'
import Login from './views/Login.vue'
import MyPage from './views/MyPage.vue'
import TestPage from './views/TestPage.vue'
import Tournaments from './views/Tournaments.vue'
import TournamentDetail from './views/TournamentDetail.vue'
import TournaDInfo from './components/TournamentDetail/TournaDInfo.vue'
import TournaDFeed from './components/TournamentDetail/TournaDFeed.vue'
import TournaDTree from './components/TournamentDetail/TournaDTree.vue'
import TournaDCompens from './components/TournamentDetail/TournaDCompens.vue'
import TournaDTeam from './components/TournamentDetail/TournaDTeam.vue'
import TournaDMedia from './components/TournamentDetail/TournaDMedia.vue'
import TournaDAdmin from './components/TournamentDetail/TournaDAdmin.vue'
import InfoEdit from './components/TournamentDetail/Admin/InfoEdit.vue'
import TeamManage from './components/TournamentDetail/Admin/TeamManage.vue'
import TournaManage from './components/TournamentDetail/Admin/TournaManage.vue'
import Compensation from './components/TournamentDetail/Admin/Compensation.vue'
import MediaManage from './components/TournamentDetail/Admin/MediaManage.vue'
import Teams from './views/Teams.vue'
import TeamSearch from './components/Teams/TeamSearch.vue'
import TeamGenerate from './components/Teams/TeamGenerate.vue'
import TeamDetail from './views/TeamDetail.vue'
import TeamDInfo from './components/TeamDetail/TeamDInfo.vue'
import TeamDFeed from './components/TeamDetail/TeamDFeed.vue'
import TeamDMember from './components/TeamDetail/TeamDMember.vue'
import TeamDSchedule from './components/TeamDetail/TeamDSchedule.vue'
import TeamDRecord from './components/TeamDetail/TeamDRecord.vue'
import ModalTest from '@/pages/ModalTest.vue';
import store from './store'

Vue.use(Router)

const requireAuth = () => (from, to, next) => {
  // console.log('rere',from, to, next,store)
  const isAuthenticated = store.state.isAuthenticated
  if (isAuthenticated) {
    alert('hi')
    return next()
  }
  next('/login?returnPath=me')
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/mypage',
      name: 'mypage',
      component: MyPage,
      beforeEnter: requireAuth()
    },
    {
      path: '/test',
      name: 'test',
      component: TestPage
    },
    {
      path: '/tournaments',
      name: 'tournaments',
      component: Tournaments
    },
    {
      path: '/modaltest',
      name: 'modaltest',
      component: ModalTest,
    },
    {
      path: '/tournaments/:id',
      name: 'TournamentDetail',
      component: TournamentDetail,
      children: [
        {
          path: 'TournaDInfo',
          name: 'TournaDInfo',
          component: TournaDInfo
        },
        {
          path: 'TournaDFeed',
          name: 'TournaDFeed',
          component: TournaDFeed
        },
        {
          path: 'TournaDTree',
          name: 'TournaDTree',
          component: TournaDTree
        },
        {
          path: 'TournaDCompens',
          name: 'TournaDCompens',
          component: TournaDCompens
        },
        {
          path: 'TournaDTeam',
          name: 'TournaDTeam',
          component: TournaDTeam
        },
        {
          path: 'TournaDMedia',
          name: 'TournaDMedia',
          component: TournaDMedia
        },
        {
          path: 'TournaDAdmin',
          name: 'TournaDAdmin',
          component: TournaDAdmin,
          children: [
            {
              path: 'InfoEdit',
              name: 'InfoEdit',
              component: InfoEdit
            },
            {
              path: 'TeamManage',
              name: 'TeamManage',
              component: TeamManage
            },
            {
              path: 'TournaManage',
              name: 'TournaManage',
              component: TournaManage
            },
            {
              path: 'Compensation',
              name: 'Compensation',
              component: Compensation
            },
            {
              path: 'MediaManage',
              name: 'MediaManage',
              component: MediaManage
            }
          ]
        }
      ]
    },
    {
      path: '/teams',
      name: 'teams',
      component: Teams,
      children: [
        {
          path: 'Search',
          name: 'TeamSearch',
          component: TeamSearch
        },
        {
          path: 'Generate',
          name: 'TeamGenerate',
          component: TeamGenerate
        }
      ]
    },
    {
      path: '/teams/:id',
      name: 'TeamDetail',
      component: TeamDetail,
      children: [
        {
          path: 'TeamDInfo',
          name: 'TeamDInfo',
          component: TeamDInfo
        },
        {
          path: 'TeamDFeed',
          name: 'TeamDFeed',
          component: TeamDFeed
        },
        {
          path: 'TeamDMember',
          name: 'TeamDMember',
          component: TeamDMember
        },
        {
          path: 'TeamDSchedule',
          name: 'TeamDSchedule',
          component: TeamDSchedule
        },
        {
          path: 'TeamDRecord',
          name: 'TeamDRecord',
          component: TeamDRecord
        }
      ]
    }
  ]
})
