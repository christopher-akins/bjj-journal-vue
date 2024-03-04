import { describe, it, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import MainBanner from '@/components/global/layout/MainBanner.vue';

describe('Components - Global - Layout - MainBanner', () => {

  describe('prop assignment', () => {
    it('renders a title if "bannerTitle" prop is provided', () => {
      const someTitle = 'some title';
      const wrapper = shallowMount(MainBanner, {
        propsData: {
          bannerTitle: someTitle,
        },
      });
      const headerElement = wrapper.find('h1');

      expect(headerElement.text()).toBe(someTitle);
    });
  });

});
