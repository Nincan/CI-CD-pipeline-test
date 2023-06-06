import * as React from 'react';
import { FormControl } from 'spaceweb/form-control';
import { Input } from 'spaceweb/input';
import { Button } from 'spaceweb/button';
import { Stack } from 'spaceweb/stack';

//github.com/manishsaraan/email-validator/blob/master/index.js
const tester =
  /^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
const validateEmail = function (email?: string) {
  if (!email) return false;

  if (email.length > 256) return false;

  if (!tester.test(email)) return false;

  const [account, address] = email.split('@');
  if (account.length > 64) return false;

  const domainParts = address.split('.');
  if (
    domainParts.some(function (part) {
      return part.length > 63;
    })
  )
    return false;

  return true;
};

export default (): React.ReactElement => {
  const [value, setValue] = React.useState('');
  const [isValid, setIsValid] = React.useState(false);
  const [isVisited, setIsVisited] = React.useState(false);
  const shouldShowError = !isValid && isVisited;
  const onChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    const { value: inputValue } = event.currentTarget;
    setIsValid(validateEmail(inputValue));
    setValue(inputValue);
  };

  return (
    <form onSubmit={e => e.preventDefault()}>
      <Stack direction="vertical" gap={2}>
        <FormControl
          label="Your email"
          intent={shouldShowError ? 'error' : undefined}
          caption={shouldShowError ? 'Please input a valid email address' : null}
        >
          <Input
            id="input-id"
            value={value}
            onChange={onChange}
            onBlur={() => setIsVisited(true)}
            overrides={{}}
            type="email"
            required
          />
        </FormControl>
        <Button type="submit">Submit email</Button>
      </Stack>
    </form>
  );
};
