import { render } from '@testing-library/react';
import React from 'react';

import Foo from '..';

describe('test props', () => {
  it('render', () => {
    const { asFragment } = render(<Foo title="bbb" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
