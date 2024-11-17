Vue.createApp({
  data() {
    return {
      currentSidebar: '', 
      sidebarFilterWidth: 490, 
      sidebarDeckWidth: 490, 
      extraOffset: 262,
      isLargeScreen: window.innerWidth > 1200,
      view: 'card-sheet',
      currentMain: null,
      filters: [
        { name: '常用', checked: false, icon: 'fa-solid fa-star' },
        { name: '關鍵字', checked: false, icon: 'fa-solid fa-magnifying-glass', delButton: true },
        { name: '排序', checked: false, icon: 'fa-solid fa-sliders', delButton: true },
        { name: '類型', checked: false, icon: 'fa-solid fa-filter',checkButton:true },
        { name: '等級', checked: false, icon: 'fa-solid fa-filter',checkButton:true },
        { name: '顏色', checked: false, icon: 'fa-solid fa-filter',checkButton:true },
        { name: '費用', checked: false, icon: 'fa-solid fa-filter',checkButton:true },
        { name: '魂傷', checked: false, icon: 'fa-solid fa-filter',checkButton:true },
        { name: '攻擊力', checked: false, icon: 'fa-solid fa-filter',checkButton:true },
        { name: '稀有度', checked: false, icon: 'fa-solid fa-filter',checkButton:true },
        { name: '判定', checked: false, icon: 'fa-solid fa-filter',checkButton:true },
        { name: '特徵', checked: false, icon: 'fa-solid fa-filter',checkButton:true },
        { name: '商品', checked: false, icon: 'fa-solid fa-filter',checkButton:true }
      ],
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
    toggleFilter(value) {
      if (!this.isLargeScreen) {
        this.currentSidebar = '';
      }
      this.currentMain = this.currentMain === value ? null : value;
    },
    MenuFilter(index) {
      this.filters[index].checked = !this.filters[index].checked; // 控制特定过滤器切换
    },
    closeSidebar() {
      this.currentSidebar = '';
      this.currentMain = '';
    },
    updateScreenSize() {
      this.isLargeScreen = window.innerWidth > 1200;
      if (!this.isLargeScreen) {
        this.closeSidebars(); 
      } else {
        this.currentMain = '';
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