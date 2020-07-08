Vue.component('testcomponent',{
  data:function(){
  return {
      status:'Critical'
  }
},
   template : '<div><h1>This is coming from component and Status is:{{status}}</h1></div>'
});
var vm = new Vue({
   el: '#component_test1'
});
var vm1 = new Vue({
   el: '#component_test2'
});