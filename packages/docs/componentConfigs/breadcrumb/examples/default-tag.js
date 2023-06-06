import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'spaceweb/breadcrumb';

export default () => {
  return (
    <Breadcrumb>
      <BreadcrumbItem href={'https://frontend.sprinklr.com/spaceweb'}>Renders as anchor tag</BreadcrumbItem>
      <BreadcrumbItem>Renders as Button</BreadcrumbItem>
      <BreadcrumbItem>Link3</BreadcrumbItem>
    </Breadcrumb>
  );
};
