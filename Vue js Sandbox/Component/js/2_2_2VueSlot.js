Vue.component("sidebar",{
  template:
  `
  <ul><li>  <slot>  </slot>  </li></ul>
  `
})

new Vue({
  el:'#app'
})