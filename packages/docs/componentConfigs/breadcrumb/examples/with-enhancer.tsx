import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'spaceweb/breadcrumb';

export default (): React.ReactNode => {
  return (
    <Breadcrumb>
      <BreadcrumbItem endEnhancer={() => <span>🏠</span>}>
        <div> Home </div>
      </BreadcrumbItem>
      <BreadcrumbItem endEnhancer={() => <span>📞</span>}>
        <div> Contact </div>
      </BreadcrumbItem>
      <BreadcrumbItem endEnhancer={() => <span>📑</span>}>
        <div> About us </div>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};
