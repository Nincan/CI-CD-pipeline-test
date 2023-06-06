import { StatefulPaymentCard } from 'spaceweb/payment-card';

export default () => (
  <StatefulPaymentCard
    placeholder="Please enter your credit card number..."
    onChange={event => console.log(event.currentTarget.value)}
  />
);
