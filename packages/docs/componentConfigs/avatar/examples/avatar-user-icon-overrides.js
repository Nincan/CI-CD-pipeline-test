import { Avatar } from 'spaceweb/avatar';
import CallIcon from 'spaceweb-icons/line/Call';

export default () => (
  <>
    <Avatar
      overrides={{
        Initials: {
          props: {
            overrides: {
              UserIcon: {
                style: 'spr-icon-04',
                props: {
                  className: 'h-auto w-2/3',
                },
              },
            },
          },
        },
      }}
      name="+91 4761543218"
      size="xl"
    />
    <Avatar
      overrides={{
        Initials: {
          props: {
            overrides: {
              UserIcon: {
                component: CallIcon,
              },
            },
          },
        },
      }}
      name="+91 4761543218"
      size="xl"
    />
  </>
);
