import {
  Checkbox,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui';
import { CheckboxProps } from '@radix-ui/react-checkbox';
import React, { ReactNode } from 'react';
import { Control, FieldValues, Path } from 'react-hook-form';

interface CheckBoxFieldProps<T extends FieldValues> extends CheckboxProps {
  control: Control<T>;
  field_name: Path<T>;
  label?: ReactNode | string;
  message?: ReactNode | string;
}

export function CheckBoxField<T extends FieldValues>(
  props: CheckBoxFieldProps<T>,
) {
  const { control, field_name, label, message, ...rest } = props;
  return (
    <React.Fragment>
      <FormField
        control={control}
        name={field_name}
        render={({ field }) => (
          <FormItem className="flex flex-row items-center gap-3">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
                {...rest}
              />
            </FormControl>
            {label ? (
              <FormLabel className="text-sm text-gray-2 leading-none">
                {label}
              </FormLabel>
            ) : null}
            {message ? <FormDescription>{message}</FormDescription> : null}
          </FormItem>
        )}
      />
    </React.Fragment>
  );
}
