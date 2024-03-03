import { describe, it, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import BaseInput from '@/components/global/inputs/BaseInput.vue';

describe('Components - Global - Inputs - BaseInput', () => {
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
});
