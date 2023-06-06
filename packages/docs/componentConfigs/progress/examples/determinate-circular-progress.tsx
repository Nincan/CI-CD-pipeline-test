import * as React from 'react';
import { CircularProgress } from 'spaceweb/progress';

export default function CircularDeterminate(): React.ReactElement {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress(oldProgress => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return (): void => {
      clearInterval(timer);
    };
  }, []);

  return <CircularProgress value={progress} label={Math.round(progress)} />;
}
