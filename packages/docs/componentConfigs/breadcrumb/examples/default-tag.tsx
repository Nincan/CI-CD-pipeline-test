import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'spaceweb/breadcrumb';

export default (): React.ReactNode => {
  return (
    <Breadcrumb>
      <BreadcrumbItem href={'https://frontend.sprinklr.com/spaceweb'}>Renders as anchor tag</BreadcrumbItem>
      <BreadcrumbItem>Renders as button tag</BreadcrumbItem>
      <BreadcrumbItem>Link3</BreadcrumbItem>
    </Breadcrumb>
  );
};
