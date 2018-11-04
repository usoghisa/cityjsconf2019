<template>
 <nav class="navbar" :style="style">
    <div class="container ">
      <div class="navbar-brand">
          <a class="navbar-item">
            <img src="/images/logo.png" alt="City of London JavaScript Conference logo" />
          </a>
          <span class="navbar-burger" v-on:click="toggleNav" v-bind:class="{ 'is-active': isActive }">
            <span></span>
            <span></span>
            <span></span>
          </span>
      </div>
      <div  class="navbar-end navbar-menu" :class="{ 'is-active': isActive }">
        <div class="navbar-item is-active">
            <nuxt-link 
              v-if="item.hide === 'No' && item.isRedirect  === 'No'" 
              class="navbar-item r-item" 
              :key="item.id" 
              :to="item.url"
              :style="style"
               v-for="item in items"
            >
              {{item.title}}
            </nuxt-link>
            <a
              class="navbar-item r-item is-info " 
              :class="{ button: item.color==='button' }"
              v-for="item in items"
              v-if="item.hide === 'No' && item.isRedirect === 'Yes'" 
              :href="item.url"
              :style="style"
              :key="item.id" 
            >
            {{item.title}}
            </a>
        </div>
      </div>
    </div>
  </nav>
  <!-- END NAV -->
</template>
<style>
/* You can get the component styles from the Github repository for this demo */
</style>
<script>
export default {
  data: function() {
    return {
      isActive: false,
      scroll: false
    }
  },
  methods: {
    toggleNav: function() {
      this.isActive = !this.isActive;
    },
    handleScroll: function() {
      if(window.scrollY > 10) {
        this.scroll = true;
      } else  {
        this.scroll = false;
      }
    }
  },
  computed: {
    style () {
      return (this.scroll) ? "background-color: #000 !important; color: #fff ;" : ""
    }
  },
  destroyed () {
    if (process.browser) { 
      window.removeEventListener('scroll', this.handleScroll);
    }
  },
  created () {
    if (process.browser) { 
      window.addEventListener('scroll', this.handleScroll);
    }
  },
  props: {
    items: {
      type: Array
    }
  }
};
</script>
<style lang="sass">
  @import '~/assets/css/mq.sass';

  .navbar
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
    background-color: transparent !important;
    a:hover
      text-decoration: underlined;

  a.r-item
    color: $white;
    padding: 0.5rem 1.75rem
    &:hover
      background: none;
      color: $white;
    +mobile
      color: $black
      &:hover
       text-decoration: underline;

  .navbar-burger
    &:hover
      background-color: #F1F1F1
    span
      background-color: #C1C1C1

</style>