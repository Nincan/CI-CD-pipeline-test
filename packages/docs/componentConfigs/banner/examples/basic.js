import * as React from 'react';
import { Banner, BannerItem } from 'spaceweb/banner';

export default () => (
  <Banner collapsible title="Banner Header" $as="ol">
    <BannerItem>Error 1</BannerItem>
    <BannerItem>Error 2</BannerItem>
    <BannerItem>Error 3</BannerItem>
    <BannerItem>Error 4</BannerItem>
    <BannerItem>Error 5</BannerItem>
    <BannerItem>Error 6</BannerItem>
  </Banner>
);
