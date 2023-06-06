/**
 *  Created by Aneree on 29/03/21.
 */
import { memo } from 'react';

import { FieldConfigMapBuilder, FieldConfigBuilder, LayoutBuilder } from 'spaceweb-form';

import { Block, TextInputControl } from '../../componentConfigs/forms/fieldRenderers';
import DatePickerBasic from '../../componentConfigs/date-picker/examples/basic';
import { FormLayout } from '../../componentConfigs/forms/FormLayout';
import PhoneInput from '../../componentConfigs/phone-input/examples/basic'
import TimeRangePicker from '../../componentConfigs/time-range-picker/examples/basic'

const MemoizedInput = memo(TextInputControl);

const LAYOUT = new LayoutBuilder({
    direction: 'vertical',
    gap: 2,
})
    .addNode(
        new LayoutBuilder({
            className: 'items-center',
            direction: 'vertical',
            gap: 2,
            md: {
                direction: 'horizontal',
                gap: 4,
            },
        })
            .addNode('userImage', { className: 'h-40 w-40 self-center flex-grow-0' })
            .addNode(
                new LayoutBuilder({
                    direction: 'vertical',
                    gap: 2,
                    md: {
                        gap: 4,
                    },
                })
                    .addNode('firstName')
                    .addNode('lastName')
                    .build(),
                { className: 'w-full md:w-auto' }
            )
            .build()
    )
    .addNode(
        new LayoutBuilder({
            direction: 'vertical',
            gap: 2,
            md: {
                direction: 'horizontal',
                gap: 4,
            },
        })
            .addNode('designation')
            .addNode('department')
            .build()
    )
    .addNode('restrictedIps')
    .addNode('datePicker')
    .addNode('phoneInput')
    .addNode('timeRangePicker')
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
            id: 'designation',
            Component: MemoizedInput,
            componentProps: {
                text: 'Designation',
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
            },
        }).build()
    )
    .addFieldConfig(
        new FieldConfigBuilder({
            id: 'phoneInput',
            Component: PhoneInput,
            componentProps: {
                text: 'Phone Input',
            },
        }).build()
    )
    .addFieldConfig(
        new FieldConfigBuilder({
            id: 'datePicker',
            Component: DatePickerBasic,
            componentProps: {
                text: 'Date Picker',
            },
        }).build()
    )
    .addFieldConfig(
        new FieldConfigBuilder({
            id: 'timeRangePicker',
            Component: TimeRangePicker,
            componentProps: {
                text: 'Time Range Picker',
            },
        }).build()
    )
    .build();

const Form = () => (
    <FormLayout
        layout={LAYOUT}
        fieldConfigMap={FIELD_CONFIG_MAP}
        useFormArgs={{
            onSubmit: () => {
                alert('Submitted!');
            },
        }}
    />
);

export default  Form ;
