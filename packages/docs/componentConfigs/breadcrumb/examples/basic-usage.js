import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'spaceweb/breadcrumb';

export default () => {
  return (
    <Breadcrumb>
      <BreadcrumbItem>Link1</BreadcrumbItem>
      <BreadcrumbItem>Link2</BreadcrumbItem>
      <BreadcrumbItem>Link3</BreadcrumbItem>
    </Breadcrumb>
  );
};
