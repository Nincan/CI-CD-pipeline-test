import { Avatar } from 'spaceweb/avatar';
export default () => (
  <>
    {['sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'].map((size, index) => (
      <Avatar
        name="user"
        size={size}
        src={`https://material-ui.com/static/images/avatar/${index + 1}.jpg`}
        key={size}
      />
    ))}
  </>
);
