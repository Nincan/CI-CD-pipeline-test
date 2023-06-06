import * as React from 'react';
import { Banner, BannerItem, StyledTitle } from 'spaceweb/banner';

const Title = (): React.ReactElement => (
  <StyledTitle className="italic typography-l2">This is a custom title Component</StyledTitle>
);

export default (): React.ReactElement => (
  <Banner collapsible title={<Title />} $as="ol">
    <BannerItem>Error 1</BannerItem>
    <BannerItem>Error 2</BannerItem>
    <BannerItem>Error 3</BannerItem>
    <BannerItem>Error 4</BannerItem>
    <BannerItem>Error 5</BannerItem>
    <BannerItem>Error 6</BannerItem>
  </Banner>
);
