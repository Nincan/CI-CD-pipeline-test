import React, { useState } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'spaceweb/breadcrumb';
import { Box } from 'spaceweb/box';
import { Button } from 'spaceweb/button';

export default () => {
  const [last, setLast] = useState(2);

  const handleButtonClick = () => {
    setLast(prev => prev + 1);
  };

  let content = (
      <div>
        <h2>Page for Link {last}</h2>
        <h4>Content for Link {last}</h4>
      </div>
  );

  const navigateToItem = (e, index) => {
    setLast(index);
  };

  const breadCrumbItems = Array.from({ length: last+1 }, (_, i) => (
      <BreadcrumbItem onClick={navigateToItem} key={i}>Link{i}</BreadcrumbItem>
  ));

  return (
      <>
        <Breadcrumb>
          {breadCrumbItems}
        </Breadcrumb>
        <Box className="mb-2 rounded-12 p-4 h-32 border-2 spr-clr-blue-highlight">{content}</Box>
        <Button onClick={handleButtonClick}>Click to add link</Button>
      </>
  );
};
