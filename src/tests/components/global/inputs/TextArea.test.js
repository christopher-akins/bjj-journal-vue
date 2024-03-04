import { describe, it, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import TextArea from '@/components/global/inputs/TextArea.vue';

describe('Components - Global - Inputs - TextArea', () => {

  describe('prop assignment', () => {
    it('does not render a label element if no label prop is passed', () => {
      const wrapper = shallowMount(TextArea);

      expect(wrapper.find('label').exists()).toBe(false);
    });

    it('renders a label prop in the label element', () => {
      const someLabel = 'Test Label';
      const wrapper = shallowMount(TextArea, {
        props: {
          label: someLabel,
        },
      });

      expect(wrapper.find('label').text()).toBe(someLabel);
    });
  });

  describe('emits event', () => {
    it('emits update:modelValue event when input changes', async () => {
      const expectedValue = 'some new textarea value';
      const wrapper = shallowMount(TextArea);
      const inputElement = wrapper.find('textarea');

      await inputElement.setValue(expectedValue);

      expect(wrapper.emitted('update:modelValue')).toBeTruthy();
      expect(wrapper.emitted('update:modelValue')[0]).toEqual([expectedValue]);
    });
  });
});
