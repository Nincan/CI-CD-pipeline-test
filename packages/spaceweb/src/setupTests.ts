// used by https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// used by Switch component
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// used by useStickyElement hook which calls IntersectionObserver Web API
class IntersectionObserverMock {
  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-empty-function
  observe() {}

  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-empty-function
  unobserve() {}
}
Object.defineProperty(global, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: IntersectionObserverMock,
});
