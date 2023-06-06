import { Avatar } from 'spaceweb/avatar';

const alphabets: string[] = Array.from(Array(26)).map((e, i) => String.fromCharCode(i + 65));

export default () => (
  <>
    {alphabets.map(name => (
      <Avatar name={name} size="lg" src="" key={name} />
    ))}
  </>
);
