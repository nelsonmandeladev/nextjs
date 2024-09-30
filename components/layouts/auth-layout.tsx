"use client";

import React, { ReactNode } from 'react'
import { LanguageSwitcher } from '../common';
import { useTranslation } from 'react-i18next';
interface AuthLayoutProps {
    children: ReactNode
}

export function AuthLayout(props: AuthLayoutProps) {
    const { t } = useTranslation()
    const { children } = props;
    return (
        <div className='flex w-full bg-main-white shadow-auth-header'>
            {t("home:hello")}
            {children}
        </div>
    )
}
