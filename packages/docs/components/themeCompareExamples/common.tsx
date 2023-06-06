import { styled } from 'spaceweb/style';
import { Typography } from 'spaceweb/typography';

export const ComponentWrapper = styled('div', 'w-full mt-4');
export const ComponentName = props => <Typography className="h-8 flex justify-center mb-4" variant="h2" {...props} />;
export const Examples = styled('div', 'flex flex-col items-center');
export const ExampleWrapper = styled('div', 'mb-8 w-full flex flex-col items-stretch box-border');
export const ExampleName = props => <Typography className="mb-4" variant="h4" {...props} />;
