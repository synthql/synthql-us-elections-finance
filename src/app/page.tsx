'use client';
import { useSynthql } from '@synthql/react';
import { DB } from '@/generated';
import { q } from '@/queries';
import { Candidate } from '@/components/Candidate';

export default function Home() {
    return (
        <div className="w-full">
            <header className="bg-[#b22234] py-6 px-4 md:px-6">
                <h1 className="text-3xl font-bold text-white">
                    2024 US Presidential Election Candidates&apos; Campaign
                    Finances
                </h1>
            </header>
            <main className="container mx-auto py-12 px-4 md:px-6 grid gap-12">
                {useSynthql<DB, 'candidate_finances', typeof q>(q, {
                    returnLastOnly: true,
                }).data?.map((candidate) => (
                    <Candidate
                        key={candidate.candidate_id}
                        candidate={candidate}
                    />
                ))}
            </main>
        </div>
    );
}
