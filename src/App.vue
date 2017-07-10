<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header" id="app-container">
    <header class="mdl-layout__header mdl-layout__header--scroll mdl-color--primary mdl-layout__header--waterfall">
      <!-- Top row -->
      <foosnutz-main-menu></foosnutz-main-menu>
    </header>
    <div class="howbowdah-content mdl-layout__content">
      <transition name="slide" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import MainMenu from './components/main-menu/MainMenu-component';

export default {
  name: 'app',
  components: {
    'foosnutz-main-menu': MainMenu
  }
};
</script>

<style lang="scss" rel="stylesheet/scss">
  #app-container {
    overflow: inherit;
  }

  .mdl-layout__header {
    overflow: inherit; // so the suggestion content of the search bar will show completely
  }

  .mdl-layout__header-row {
    padding-left: 60px;

    h4 {
      margin: 0;
      padding-left: 12px;
    }
  }

  .mdl-layout__tab-bar-button {
    display: none;
  }

  .mdl-layout__tab-bar-container {
    height: 64px;
  }

  .mdl-layout__tab-bar {
    padding: 0;
    padding-left: 40px;
    box-sizing: border-box;
    height: 100%;
    width: 100%;

    .mdl-layout__tab {
      height: 64px;
      line-height: 64px;

      &.is-active::after {
        background-color: white;
        height: 4px;
      }
    }
  }

  main > .mdl-layout__tab-panel {
    padding: 8px;
  }

  .mdl-layout:not(.is-small-screen) .mdl-layout__tab-bar,
  .mdl-layout:not(.is-small-screen) .mdl-layout__tab-bar-container,
  .mdl-layout__header--waterfall .mdl-layout__tab-bar-container {
    overflow: visible;
  }

  #add {
    position: absolute;
    right: 40px;
    top: 36px;
    z-index: 999;
  }

  .slide-leave-active {
    transition: opacity 1s ease;
    opacity: 0;
    animation: slide-out 1s ease-out forwards;
  }

  .slide-leave {
    opacity: 1;
    transform: translateX(0);
  }

  .slide-enter-active {
    animation: slide-in 1s ease-out forwards;
  }

  @keyframes slide-out {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-30px);
    }
  }

  @keyframes slide-in {
    0% {
      transform: translateY(-30px);
    }
    100% {
      transform: translateY(0);
    }
  }

  * {
    box-sizing: inherit;
    &:before, &:after {
      box-sizing: inherit;
    }
  }
</style>
