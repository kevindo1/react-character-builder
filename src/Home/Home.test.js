import { render } from '@testing-library/react';
import Preview from '../Preview/Preview';

test('renders the Home panel', () => {
  const container = render(<Preview />);
  expect(container).toMatchSnapshot();
});
