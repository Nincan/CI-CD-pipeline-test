import { LinearProgress, ProgressSegment } from 'spaceweb/progress';
import { StatefulTooltip } from 'spaceweb/tooltip';

const values = [30, 20, 10];

const NestedProgress = () => (
  <LinearProgress>
    <StatefulTooltip content={`Positive: ${values[0]}`}>
      <ProgressSegment value={values[0]} intent="success" first />
    </StatefulTooltip>
    <StatefulTooltip content={`Negative: ${values[1]}`}>
      <ProgressSegment value={values[1]} intent="error" />
    </StatefulTooltip>
    <ProgressSegment value={values[2]} color="#8a2be2" last />
  </LinearProgress>
);

export default NestedProgress;
