import { describe, it, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import BaseInput from '@/components/global/inputs/BaseInput.vue';

describe('Components - Global - Inputs - BaseInput', () => {

  describe('prop assignment', () => {
    it('does not render a label element if no label prop is passed', () => {
      const wrapper = shallowMount(BaseInput);

      expect(wrapper.find('label').exists()).toBe(false);
    });

    it('renders a label prop in the label element', () => {
      const someLabel = 'Test Label';
      const wrapper = shallowMount(BaseInput, {
        props: {
          label: someLabel,
        },
      });

      expect(wrapper.find('label').text()).toBe(someLabel);
    });

    it('renders a default inputType of text, when no inputType prop is set', () => {
      const expectedType = 'text';
      const wrapper = shallowMount(BaseInput);
      const inputElement = wrapper.find('input');

      expect(inputElement.attributes('type')).toBe(expectedType);
    });

    it('renders an email inputType when prop is set to "email"', () => {
      const expectedType = 'email';
      const wrapper = shallowMount(BaseInput, {
        props: {
          inputType: 'email',
        },
      });
      const inputElement = wrapper.find('input');

      expect(inputElement.attributes('type')).toBe(expectedType);
    });
  });

  describe('emits event', () => {
    it('emits update:modelValue event when input changes', async () => {
      const expectedValue = 'some new value';
      const wrapper = shallowMount(BaseInput);
      const inputElement = wrapper.find('input');

      await inputElement.setValue(expectedValue);

      expect(wrapper.emitted('update:modelValue')).toBeTruthy();
      expect(wrapper.emitted('update:modelValue')[0]).toEqual([expectedValue]);
    });
  });
});
