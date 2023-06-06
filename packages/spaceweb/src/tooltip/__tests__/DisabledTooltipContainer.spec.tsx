import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { DisabledTooltipContainer, TooltipProps } from '../index';
import { Button } from '../../button';
import { TestProvider } from '../../test-utils/test-provider';

const renderTooltip = (props?: TooltipProps) =>
  render(
    <TestProvider>
      <DisabledTooltipContainer content="test-content" {...props}>
        <Button disabled>test-button</Button>
      </DisabledTooltipContainer>
    </TestProvider>
  );

describe('DisabledTooltipContainer', () => {
  test('tooltip is visible when disabled child is hovered', async () => {
    const { getByText, findByText } = renderTooltip();

    const disabledButton = getByText(/test-button/i);

    expect(disabledButton).toBeDisabled();

    userEvent.hover(disabledButton);

    expect(await findByText(/test-content/i)).toBeInTheDocument();
  });
});
