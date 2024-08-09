'use client';
import { useSynthql } from '@synthql/react';
import { DB } from '@/generated';
import { q } from '@/queries';
import { Candidate } from '@/components/Candidate';

export default function Home() {
    const result = useSynthql<DB, 'candidate_finances', typeof q>(q, {
        returnLastOnly: true,
    });

    return (
        <div className="w-full">
            <header className="bg-[#b22234] py-6 px-4 md:px-6">
                <h1 className="text-3xl font-bold text-white">
                    2024 US Presidential Election Candidates&apos; Campaign
                    Finances
                </h1>
            </header>
            <main className="container mx-auto py-12 px-4 md:px-6 grid gap-12">
                {result.data?.map((candidate) => (
                    <Candidate
                        key={candidate.candidate_id}
                        candidate={candidate}
                    />
                ))}
            </main>
            <footer className="py-6 px-4 md:px-6">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-center">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        Numbers sourced from public{' '}
                        <a
                            href="https://www.fec.gov/"
                            className="hover:underline"
                        >
                            FEC
                        </a>{' '}
                        <a
                            href="https://www.fec.gov/data/"
                            className="hover:underline"
                        >
                            data
                        </a>
                        . Last updated:{' '}
                        {result.data
                            ? convertToHumanReadable(
                                  result.data?.[0].last_updated_at,
                              )
                            : ''}
                    </span>
                </div>
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        © 2024{' '}
                        <a
                            href="https://synthql.dev/"
                            className="hover:underline"
                        >
                            SynthQL™
                        </a>
                        . All Rights Reserved.
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                        <li>
                            <a
                                href="https://synthql.dev/"
                                className="hover:underline me-4 md:me-6"
                            >
                                Website
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://synthql.dev/docs/getting-started/"
                                className="hover:underline me-4 md:me-6"
                            >
                                Docs
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://twitter.com/fernandohur/"
                                className="hover:underline me-4 md:me-6"
                            >
                                X/Twitter
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/synthql/SynthQL/"
                                className="hover:underline"
                            >
                                GitHub
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}

function convertToHumanReadable(dateTimeString: string | Date): string {
    const date = new Date(dateTimeString);

    // Check if date is invalid
    if (isNaN(date.getTime())) {
        throw new Error('Invalid date string');
    }

    // Define options for the date formatting
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short',
    };

    // Convert date to human-readable format
    return date.toLocaleDateString('en-US', options);
}
