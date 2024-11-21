new Vue({
  el: '#app',
  data() {
    return {
      menus: [{
        label: 'TOP',
        path: './index.html'
      },{
        label: 'ABOUT',
        path: './about.thml'
      },{
        label: 'SCHEDULE',
        path: './shedule.html'
      },{
        label: 'CONTACT',
        path: './contact.html'
      }]
    };
  }
});