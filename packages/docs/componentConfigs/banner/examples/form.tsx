import { memo, useState } from 'react';

import { FieldConfigMapBuilder, FieldConfigBuilder, LayoutBuilder } from 'spaceweb-form';
import { Link } from 'spaceweb/link';

import { Block, TextInputControl } from '../../forms/fieldRenderers';
import { FormLayout } from '../../forms/FormLayout';
import { Banner, BannerItem } from 'spaceweb/banner';

const MemoizedInput = memo(TextInputControl);

const LAYOUT = new LayoutBuilder({
  direction: 'vertical',
})
  .addNode(
    new LayoutBuilder({
      direction: 'vertical',
      md: {
        direction: 'horizontal',
      },
    })
      .addNode('userImage', { className: 'h-32 w-32 self-center flex-grow-0' })
      .addNode(
        new LayoutBuilder({
          direction: 'vertical',
        })
          .addNode(
            new LayoutBuilder({
              direction: 'vertical',
              md: {
                direction: 'horizontal',
              },
            })
              .addNode('firstName')
              .addNode('lastName')
              .build()
          )
          .addNode(
            new LayoutBuilder({
              direction: 'vertical',
              md: {
                direction: 'horizontal',
              },
            })
              .addNode('email')
              .addNode('userType')
              .build()
          )
          .build()
      )
      .build()
  )
  .addNode(
    new LayoutBuilder({
      direction: 'vertical',
      md: {
        direction: 'horizontal',
      },
    })
      .addNode('designation')
      .addNode('department')
      .build()
  )
  .addNode('restrictedIps')
  .build();

const FIELD_CONFIG_MAP = new FieldConfigMapBuilder()
  .addFieldConfig(
    new FieldConfigBuilder({
      id: 'userImage',
      Component: Block,
      componentProps: {
        text: 'Upload image',
      },
    }).build()
  )
  .addFieldConfig(
    new FieldConfigBuilder({
      id: 'firstName',
      Component: MemoizedInput,
      componentProps: {
        text: 'First Name',
      },
    }).build()
  )
  .addFieldConfig(
    new FieldConfigBuilder({
      id: 'lastName',
      Component: MemoizedInput,
      componentProps: {
        text: 'Last Name',
      },
    }).build()
  )
  .addFieldConfig(
    new FieldConfigBuilder({
      id: 'userType',
      Component: MemoizedInput,
      componentProps: {
        text: 'User Type',
      },
    }).build()
  )
  .addFieldConfig(
    new FieldConfigBuilder({
      id: 'designation',
      Component: MemoizedInput,
      componentProps: {
        text: 'Designation',
        mandatory: true,
      },
    }).build()
  )
  .addFieldConfig(
    new FieldConfigBuilder({
      id: 'email',
      Component: MemoizedInput,
      componentProps: {
        text: 'Email',
      },
    }).build()
  )
  .addFieldConfig(
    new FieldConfigBuilder({
      id: 'department',
      Component: MemoizedInput,
      componentProps: {
        text: 'Department',
      },
    }).build()
  )
  .addFieldConfig(
    new FieldConfigBuilder({
      id: 'restrictedIps',
      Component: MemoizedInput,
      componentProps: {
        text: 'Restricted Ips',
        mandatory: true,
      },
    }).build()
  )
  .build();

const getErrorItems = fieldIds =>
  fieldIds.map(item => (
    <BannerItem>
      Make sure <Link className="typography-bl1">{item}</Link> is not empty!
    </BannerItem>
  ));

export default () => {
  const [errItems, setErrorItems] = useState<string[]>([]);
  return (
    <>
      <FormLayout
        layout={LAYOUT}
        fieldConfigMap={FIELD_CONFIG_MAP}
        useFormArgs={{
          validate: ({ values }) => {
            const errList: string[] = [];
            const errObj: { [key: string]: string } = {};
            if (!values.restrictedIps) {
              errList.push('restrictedIps');
              errObj.restrictedIps = "Hold on! This field can't be empty";
            }
            if (!values.designation) {
              errList.push('designation');
              errObj.designation = "Hold on! This field can't be empty";
            }
            setErrorItems(errList);
            return errObj;
          },
          onSubmit: () => {
            alert('Submitted!');
          },
        }}
      />
      {errItems.length > 0 && (
        <Banner title={`${errItems.length} Errors Found`} collapsible $as="ol">
          {getErrorItems(errItems)}
        </Banner>
      )}
    </>
  );
};
