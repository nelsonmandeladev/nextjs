import { Inter } from "next/font/google";

import { Metadata } from "next";
import "@/styles/globals.css";
import { cn } from "@/lib";

import initTranslations from "@/lib/i18n";
import { ReactNode } from "react";
import { TranslationProvider } from "@/providers";
import { dir } from "i18next";
import i18nConfig from "@/lib/i18nConfig";
import { Toaster } from "@/components/ui";
import { TRANSlATIONS_NAMESPACES } from "@/constants";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
    title: "Base nextjs project",
    description: "La description",
    alternates: {
        canonical: '/',
        languages: {
            'en-US': '/en',
            'fr-FR': '/fr',
        },
    },
};


interface LayoutProps {
    children: ReactNode,
    params: {
        locale: string
    }
}
export function generateStaticParams() {
    return i18nConfig.locales.map(locale => ({ locale }));
}

export default async function layout({
    children,
    params: { locale }
}: LayoutProps) {

    const { resources } = await initTranslations(locale, TRANSlATIONS_NAMESPACES);
    return (
        <html lang={locale} dir={dir(locale)}>
            <body className={cn(inter.className, "w-full flex justify-center bg-gray-100")}>
                <div className="w-full max-w-[1728px]">
                    <TranslationProvider
                        locale={locale}
                        resources={resources}
                    >
                        {children}
                        <Toaster />
                    </TranslationProvider>
                </div>
            </body>
        </html>
    );
}