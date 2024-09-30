"use client";

import { Button, Input, InputProps } from '@/components/ui';
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui';
import React, { ReactNode, useState } from 'react';
import {Control, FieldValues, Path} from 'react-hook-form';
import { Render } from '../conditional-renderer';
import { Eye, EyeOff } from 'lucide-react';
import { cn } from '@/lib';


interface FieldIconProps {
    icon: ReactNode,
    position: "start" | "end"
}

interface InputField<T extends  FieldValues> extends InputProps {
    control: Control<T>,
    field_name: Path<T>,
    label?: string,
    description?: string,
    icon?: FieldIconProps
}

export function InputField<T extends  FieldValues>(props: InputField<T>) {
    const { control, field_name, label, description, icon, ...rest } = props;

    const [showPassword, setShowPassword] = useState(false);
    return (
        <FormField
            control={control}
            name={field_name}
            render={({ field }) => (
                <FormItem>
                    {label ? <FormLabel className='text-main-black size-[16px]'>{label}</FormLabel> : null}
                    <FormControl className='relative'>
                        <div className='relative'>
                            <Input
                                {...field}
                                {...rest}
                                type={rest.type === "password" ? showPassword ? "text" : rest.type : "text"}
                                className={cn(icon?.position === "start" ? "pl-14" : "pr-14")}
                            />
                            <Render>
                                <Render.If
                                    condition={rest.type === "password"}
                                >
                                    <Button
                                        type='button'
                                        variant={"secondary"}
                                        size={"icon"}
                                        className='absolute top-1/2 right-4 transform  -translate-y-1/2'
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <EyeOff /> : <Eye />}
                                    </Button>
                                </Render.If>
                                <Render.If
                                    condition={icon ? true : false}
                                >
                                    <Render>
                                        <Render.If
                                            condition={icon?.position === "start"}
                                        >
                                            <div className='absolute top-1/2 left-4 transform  -translate-y-1/2 text-secondary bg-white'>  {icon?.icon}</div>
                                        </Render.If>
                                        <Render.Else >
                                            <div className='absolute top-1/2 right-4 transform  -translate-y-1/2 text-secondary bg-white'>
                                                {icon?.icon}</div>

                                        </Render.Else>
                                    </Render>
                                </Render.If>
                            </Render>
                        </div>

                    </FormControl>
                    {description ? <FormDescription>{description}</FormDescription> : null}
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}
