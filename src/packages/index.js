import LimeHeader from './header/header.vue';
import LimeBottomNav from './bottomNav/bottomNav.vue';
import LimeBottomItem from './bottomNav/bottomNavItem.vue';

const components = [
  LimeHeader,
  LimeBottomNav,
  LimeBottomItem,
];

function install(Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
}

export default {
  install,
};
