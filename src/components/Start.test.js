import { render } from 'react-testing-library';
import Start from './Start';

describe('Start', () => {
  it('renders the Start', () => {
    const { queryByText } = render(<Start />);
    const startButton = queryByText('Start');
    expect(startButton.innerHTML).toBe('Start');
  });
});
