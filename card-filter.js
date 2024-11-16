Vue.createApp({
  data() {
    return {
      currentSidebar: '', 
      sidebarFilterWidth: 490, 
      sidebarDeckWidth: 490, 
      extraOffset: 262,
      isLargeScreen: window.innerWidth > 1200,
      view: 'card-sheet',
    };
  },
  computed: {
    sidebarMarginLeft() {
      if (!this.isLargeScreen) {
        return 0; 
      }

      if (this.currentSidebar === 'open-filter') {
        return this.sidebarFilterWidth - this.extraOffset;
      } else if (this.currentSidebar === 'open-deck') {
        return this.sidebarDeckWidth - this.extraOffset;
      } else {
        return 0;
      }
    },
  },
  methods: {
    toggleSidebar(sidebar) {
      this.currentSidebar = this.currentSidebar === sidebar ? '' : sidebar;
    },
    
    closeSidebar() {
      this.currentSidebar = '';
    },
    updateScreenSize() {
      this.isLargeScreen = window.innerWidth > 1200;
      if (!this.isLargeScreen) {
        this.closeSidebars(); 
      }
    },
  },
  mounted() {
    window.addEventListener('resize', this.updateScreenSize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateScreenSize);
  },
}

).mount('#app');