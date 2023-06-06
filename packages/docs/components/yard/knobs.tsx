import * as React from 'react';
import { ReactElement } from 'react';
import { useStyletron } from 'baseui';
import { Button } from 'spaceweb/button';

import { TPropValue, TKnobsProps, PropTypes } from 'react-view';
import Knob from './knob';

const KnobColumn = ({ state, knobNames, error, set }: TKnobsProps & { knobNames: string[] }): ReactElement => {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        flexBasis: '50%',
        padding: `0 ${theme.sizing.scale600}`,
      })}
    >
      {knobNames.map((name: string) => (
        <Knob
          key={name}
          name={name}
          error={error.where === name ? error.msg : null}
          description={state[name].description}
          type={state[name].type}
          val={state[name].value}
          options={state[name].options}
          placeholder={state[name].placeholder}
          set={(value: TPropValue) => set(value, name)}
          enumName={state[name].enumName}
          custom={state[name].custom}
        />
      ))}
    </div>
  );
};

const Knobs = ({ state, set, error }: TKnobsProps): ReactElement => {
  const [css, theme] = useStyletron();
  const [showAllKnobs, setShowAllKnobs] = React.useState(false);
  const allKnobNames = Object.keys(state).filter(
    name =>
      state[name].type !== PropTypes.Custom ||
      (state[name].type === PropTypes.Custom && state[name].custom.spaceKnobPropFlag === true)
  );
  const filteredKnobNames = allKnobNames.filter((name: string) => state[name].hidden !== true);
  const knobNames = showAllKnobs ? allKnobNames : filteredKnobNames;
  const firstGroup = knobNames.slice(0, Math.round(knobNames.length / 2));
  const secondGroup = knobNames.slice(Math.round(knobNames.length / 2));
  return (
    <React.Fragment>
      <div
        className={css({
          display: 'flex',
          flexWrap: 'wrap',
          [theme.mediaQuery.medium]: {
            flexWrap: 'nowrap',
          },
          margin: `0 -${theme.sizing.scale600}`,
        })}
      >
        <KnobColumn state={state} knobNames={firstGroup} set={set} error={error} />
        <KnobColumn state={state} knobNames={secondGroup} set={set} error={error} />
      </div>
      {filteredKnobNames.length !== allKnobNames.length && (
        <Button className="mb-2" variant="tertiary" size="sm" onClick={() => setShowAllKnobs(!showAllKnobs)}>
          {showAllKnobs ? 'Show only basic props' : 'Show all props'}
        </Button>
      )}
    </React.Fragment>
  );
};

export default Knobs;
