import { render } from '@testing-library/react';
import Editor from './Editor';

test('renders the Editor panel', () => {
  const container = render(<Editor head="bird-head" />);
  expect(container).toMatchSnapshot();
});
