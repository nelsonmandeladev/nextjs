"use client";
import { UserLoginSchema, UserLoginType } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from 'react-hook-form';
import { Form } from '../ui/form';
import { InputField } from '../common';
import { Button } from '../ui';
import { Mail } from 'lucide-react';

export  function LoginForm() {
    const form = useForm<UserLoginType>({
        resolver: zodResolver(UserLoginSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    });

    function handleLogin(data: UserLoginType) {
        console.log({ data })
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleLogin)} className='space-y-10 w-[800]px'>
                <div className="space-y-5">
                    <InputField
                        control={form.control}
                        field_name={'email'}
                        label='Email'
                        description='Entrez votre email'
                        type='email'
                        className=''
                        icon={{
                            icon: <Mail size={30} />,
                            position: "start"
                        }}
                    />
                    <InputField
                        control={form.control}
                        field_name={'email'}
                        label='Email'
                        description='Entrez votre email'
                        type='email'
                        className=''
                        icon={{
                            icon: <Mail size={30} />,
                            position: "end"
                        }}
                    />
                    <InputField
                        control={form.control}
                        field_name={'password'}
                        label='Mot de passe'
                        description='Entrez votre mot de passe'
                        type='password'
                        className=''
                    />
                </div>

                <Button type='submit'>
                    Connexion
                </Button>
            </form>
        </Form>

    )
}
