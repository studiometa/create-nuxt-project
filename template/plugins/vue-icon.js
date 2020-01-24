/**
 * Inject a global `VueIcon` component.
 */
import Vue from 'vue';

const files = require.context('~/assets/svg', true, /[\s\S]*$/);
const components = files.keys().reduce((icons, path) => {
  const file = path.replace('./', '');
  const key = file.replace('.svg', '');
  icons[key] = async () => import(`~/assets/svg/${file}`);
  return icons;
}, {});

Vue.component('vue-icon', {
  components,
  props: {
    /**
     * The name of the icon.
     */
    name: {
      type: String,
      required: true,
    },
  },
  render(h) {
    console.log(this);
    return h(this.name, {
      class: 'icon',
      on: this.$listeners,
      attr: this.$attrs,
    });
  },
});
