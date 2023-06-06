import { Avatar } from 'spaceweb/avatar';
import useStyle from 'spaceweb/style/useStyle';

export default () => {
  const { css } = useStyle();
  return (
    <>
      <div className={css('flex items-center')}>
        <Avatar
          overrides={{
            Root: {
              style: ({ theme }) => ({
                borderStyle: 'solid',
                borderWidth: theme.borderWidth.default,
                borderColor: theme.spr.focus01,
              }),
            },
          }}
          name="user name #1"
          size="xl"
          src="https://material-ui.com/static/images/avatar/1.jpg"
        />

        <Avatar
          overrides={{
            Root: {
              style: ({ theme }) => ({
                borderStyle: 'solid',
                borderWidth: theme.borderWidth.default,
                borderColor: theme.spr.focus01,
              }),
            },
          }}
          name="beyonce knowles"
          size="xl"
          src="https://material-ui.com/static/images/avatar/0.jpg"
        />
      </div>
      <div className={css({ display: 'flex', alignItems: 'center' })}>
        <Avatar
          overrides={{
            Avatar: {
              style: ({ theme }) => ({
                borderTopLeftRadius: theme.borderRadius.default,
                borderTopRightRadius: theme.borderRadius.default,
                borderBottomRightRadius: theme.borderRadius.default,
                borderBottomLeftRadius: theme.borderRadius.default,
              }),
            },
            Root: {
              style: ({ theme }) => ({
                borderTopLeftRadius: theme.borderRadius.default,
                borderTopRightRadius: theme.borderRadius.default,
                borderBottomRightRadius: theme.borderRadius.default,
                borderBottomLeftRadius: theme.borderRadius.default,
              }),
            },
          }}
          name="user name #3"
          size="xl"
          src="https://material-ui.com/static/images/avatar/1.jpg"
        />

        <Avatar
          overrides={{
            Avatar: {
              style: ({ theme }) => ({
                borderTopLeftRadius: theme.borderRadius.default,
                borderTopRightRadius: theme.borderRadius.default,
                borderBottomRightRadius: theme.borderRadius.default,
                borderBottomLeftRadius: theme.borderRadius.default,
              }),
            },
            Root: {
              style: ({ theme }) => ({
                borderTopLeftRadius: theme.borderRadius.default,
                borderTopRightRadius: theme.borderRadius.default,
                borderBottomRightRadius: theme.borderRadius.default,
                borderBottomLeftRadius: theme.borderRadius.default,
              }),
            },
          }}
          name="beyonce knowles"
          size="xl"
          src="https://material-ui.com/static/images/avatar/0.jpg"
        />
      </div>
    </>
  );
};
