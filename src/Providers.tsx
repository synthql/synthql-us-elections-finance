'use client';
import { SynthqlProvider } from '@synthql/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export function Providers(props: React.PropsWithChildren<{}>) {
    return (
        <QueryClientProvider client={queryClient}>
            <SynthqlProvider
                value={{
                    endpoint:
                        typeof window !== 'undefined'
                            ? window.location.href + 'synthql'
                            : 'http://localhost:3000/' + 'synthql',
                    requestInit: {
                        method: 'POST',
                    },
                }}
            >
                {props.children}
            </SynthqlProvider>
        </QueryClientProvider>
    );
}
