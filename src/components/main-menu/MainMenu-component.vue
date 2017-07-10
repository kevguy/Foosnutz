<template>
  <div class="mdl-layout__header-row">
    <h4 class="">HowBowDah</h4>

    <router-link id="add" tag="button" :to="{name: 'Registration'}" class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored mdl-shadow--4dp mdl-color--accent">
      <i class="material-icons" role="presentation">add</i>
      <span class="visuallyhidden">Add</span>
    </router-link>

    <div class="howbowdah-header-spacer mdl-layout-spacer"></div>
    <!-- <div class="howbowdah-search-box mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label mdl-textfield--align-right mdl-textfield--full-width">
      <label class="mdl-button mdl-js-button mdl-button--icon" for="search-field">
        <i class="material-icons">search</i>
      </label>
      <div class="mdl-textfield__expandable-holder">
        <input class="mdl-textfield__input" type="text" id="search-field">
      </div>
    </div> -->
    <!-- <form class="devsite-search-form" action="https://developers.google.com/s/results/" method="GET" id="top-search" search-placeholder="Search">
      <div id="searchbox" class="devsite-searchbox">
        <input placeholder="Search" type="text" class="devsite-search-field devsite-search-query" name="q" value="" autocomplete="off">
        <div class="devsite-search-image material-icons"></div>
      </div>
    </form> -->
    <!-- <div class="howbowdah-search-box tagrhead-mdl-search-form" search-placeholder="Search">
      <div id="tagrhead-container"></div>
      <div class="tagrhead-mdl-searchbox">
        <div class="tagrhead-mdl-search-image material-icons"></div>
        <input id="tagrhead-input" placeholder="Search" type="text" class="tagrhead-mdl-search-field tagrhead-mdl-search-query"  autocomplete="off">
      </div>
    </div> -->

    <!-- Navigation -->
    <!-- <div class="howbowdah-navigation-container">
      <nav class="howbowdah-navigation mdl-navigation">
        <a class="mdl-navigation__link mdl-typography--text-uppercase" href="">Phones</a>
        <a class="mdl-navigation__link mdl-typography--text-uppercase" href="">Tablets</a>
        <a class="mdl-navigation__link mdl-typography--text-uppercase" href="">Wear</a>
        <a class="mdl-navigation__link mdl-typography--text-uppercase" href="">TV</a>
        <a class="mdl-navigation__link mdl-typography--text-uppercase" href="">Auto</a>
        <a class="mdl-navigation__link mdl-typography--text-uppercase" href="">One</a>
        <a class="mdl-navigation__link mdl-typography--text-uppercase" href="">Play</a>
      </nav>
    </div> -->

    <button v-if="!isAuthenticated" class="sign-up-btn mdl-button mdl-js-button mdl-button--raised mdl-button--colored" v-on:click="showSignUpLoginDialog()">
      Sign Up/Login
    </button>

    <button v-bind:style="{ display: isAuthenticated ? 'initial' : 'none' }" class="profile-pic-btn mdl-button mdl-button--user mdl-js-button profile-group" id="mhb-profile">
      <span>{{userName}}</span>
      <img v-bind:src="userProfilePic" alt="">
    </button>
    <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
        for="mhb-profile">
      <li class="mdl-menu__item" v-on:click="getProfile()">Dashboard</li>
      <li class="mdl-menu__item">Settings</li>
      <li class="mdl-menu__item" v-on:click="signOut()">Sign Out</li>
    </ul>

    <button id="demo-menu-lower-right"
        class="more-vertical-menu howbowdah-more-button mdl-button mdl-js-button mdl-button--icon">
      <i class="material-icons">more_vert</i>
    </button>
    <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
        for="demo-menu-lower-right">
      <li class="mdl-menu__item">Some Action</li>
      <li class="mdl-menu__item">Another Action</li>
      <li disabled class="mdl-menu__item">Disabled Action</li>
      <li class="mdl-menu__item">Yet Another Action</li>
    </ul>
  </div>
</template>

<script src="./MainMenu.js"></script>
<style lang="scss" rel="stylesheet/scss" src="./MainMenu.scss" scoped></style>
