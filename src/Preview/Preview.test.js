import { render } from '@testing-library/react';
import Preview from './Preview';

test('renders the Preview panel', () => {
  const container = render(<Preview head="aweras-head" />);
  expect(container).toMatchSnapshot();
});
