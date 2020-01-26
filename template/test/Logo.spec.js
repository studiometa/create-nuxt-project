import { createLocalVue, shallowMount } from '@vue/test-utils';
import VueIcon from '~/components/Icon';
import Logo from '~/components/Logo';

const localVue = createLocalVue();
localVue.component('vue-icon', VueIcon);

describe('Logo', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Logo, { localVue });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
