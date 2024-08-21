import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from '@/Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: `2024 US Presidential Elections Candidates' Campaign Finances`,
    description: [
        'A breakdown of the campaign finances for the ',
        '3 major candidates of the upcoming US Presidential Elections',
    ].join(''),
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
