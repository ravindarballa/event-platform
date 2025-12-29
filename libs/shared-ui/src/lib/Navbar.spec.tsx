import { render } from '@testing-library/react';

import Navbar from './Navbar';

describe('MyComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Navbar />);
    expect(baseElement).toBeTruthy();
  });
});
