import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Registration from '@/components/registration-page/Registration-page';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/registration',
      name: 'Registration',
      component: Registration
    }
  ],
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return {
        selector: to.hash
      };
    }
    return {
      x: 0,
      y: 0
    };
  }
});
// {
//   path: '/question',
//   component: Question,
//   children: [
//     { path: '', component: QuestionStart, name: 'questionRoot' },
//     { path: 'adduniversity', component: questionUniversity, name:'questionUniversity'},
//     { path: 'addspecialty', component: questionSpecialty, name:'questionSpecialty'},
//     { path: 'add', component: QuestionAdd, name: 'questionAdd' },
//     { path: 'edit/:id', component: QuestionEdit, name: 'questionEdit' },
//     { path: ':id', component: QuestionDetail, name: 'questionDetail' },
//   ]
// },
