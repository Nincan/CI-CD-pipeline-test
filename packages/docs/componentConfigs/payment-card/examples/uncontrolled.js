import { StatefulPaymentCard } from 'spaceweb/payment-card';

export default () => (
  <StatefulPaymentCard
    placeholder="Please enter your credit card number..."
    onChange={e => console.log(e.target.value)}
  />
);
