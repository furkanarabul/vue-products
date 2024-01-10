// App.spec.ts
declare let global: any;

import { mount } from '@vue/test-utils';
import App from '@/App.vue';

describe('App.vue', () => {
  test('renders properly', async () => {
    // Mock the fetch function to return a sample product data
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ id: 1, name: 'Sample Product', variants: [{ id: 1, hexCode: '#ffffff', images: ['sample.jpg'] }] }),
      })
    );

    const wrapper = mount(App);

    // Wait for the component to mount and fetch data
    await wrapper.vm.$nextTick();

    // Assert that the component exists
    expect(wrapper.exists()).toBe(true);

    // Assert that the product data is rendered
    expect(wrapper.text()).toContain('Sample Product');
    expect(wrapper.text()).toContain('Available Colors :');
    expect(wrapper.find('.rounded-2xl').exists()).toBe(true);

    // Optionally, you can test interactions or other aspects of your component
    // For example, you might want to test the behavior when the ProductDetailModal is triggered.

    // Clean up mocks
    jest.restoreAllMocks();
  });

  // Add more tests based on the functionality of your App.vue
});
