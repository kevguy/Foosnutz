/* global componentHandler */
import { mapGetters } from 'vuex';

export default {
  name: 'main-menu',
  data() {
    return {
      isSearchBoxOpen: false,
      tagrheadInstance: undefined
    };
  },
  created() {},
  computed: {
    ...mapGetters({
      getToken: 'Auth_getToken',
      isAuthenticated: 'Auth_isAuthenticated'
    }),
    isLoggedIn() {
      this.$nextTick(() => {
        componentHandler.upgradeDom();
      });

      this.$nextTick(() => {
        componentHandler.upgradeAllRegistered();
      });
      // return this.$store.state.user.isLoggedIn
      return true;
    },
    userName() {
      // return this.$store.state.user.userName
      return 'Kev';
    },
    userProfilePic() {
      // return this.$store.state.user.userProfilePic || 'https://gitlab.com/uploads/project/avatar/2929996/IMG-20150505-WA0006.jpg'
      return 'https://gitlab.com/kevlai/howbowdah/raw/master/images/suifu1.jpeg';
    }
  },
  mounted() { },
  updated() {
    // so that Material Design Lite stuff will load
    this.$nextTick(() => {
      componentHandler.upgradeDom();
    });
    this.$nextTick(() => {
      componentHandler.upgradeAllRegistered();
    });
  },
  methods: { }
};
