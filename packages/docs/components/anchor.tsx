import { styled } from 'spaceweb/style';

const Wrapper = styled('a', ({ theme }, { $isVisible, $theme }) => ({
  visibility: $isVisible ? 'visible' : 'hidden',
  color: theme.spr.text01,
}));

const elementToSize = element => {
  switch (element) {
    case 'h1':
      return 22;
    case 'h2':
      return 18;
    case 'h3':
      return 16;
    default:
      return 14;
  }
};

const Anchor = ({ isVisible, slug, element }) => (
  <Wrapper $isVisible={isVisible} href={`#${slug}`}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={elementToSize(element)}
      height={elementToSize(element)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-link"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  </Wrapper>
);

export default Anchor;
