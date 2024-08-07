import {
    HARRIS_CANDIDATE_ID,
    KENNEDY_CANDIDATE_ID,
    TRUMP_CANDIDATE_ID,
} from '@/constants';

export function Candidate(props: {
    candidate: {
        candidate_id: string;
        disbursements: string | null;
        last_cash_on_hand_end_period: string | null;
        last_debts_owed_by_committee: string | null;
        last_debts_owed_to_committee: string | null;
        receipts: string | null;
    };
}) {
    return (
        <section>
            <h2 className="text-2xl font-bold">
                {getCandidateName(props.candidate.candidate_id)}
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mt-6">
                <div>
                    <h3 className="text-xl font-semibold">
                        Total Money Raised
                    </h3>
                    <p className="text-4xl font-bold">
                        {formatMoney(props.candidate.receipts)}
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Total Money Spent</h3>
                    <p className="text-4xl font-bold">
                        {formatMoney(props.candidate.disbursements)}
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Total Debts Owed</h3>
                    <p className="text-4xl font-bold">
                        {formatMoney(
                            props.candidate.last_debts_owed_to_committee,
                        )}
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Total Debts Owing</h3>
                    <p className="text-4xl font-bold">
                        {formatMoney(
                            props.candidate.last_debts_owed_by_committee,
                        )}
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold">
                        Total Cash On Hand
                    </h3>
                    <p className="text-4xl font-bold">
                        {formatMoney(
                            props.candidate.last_cash_on_hand_end_period,
                        )}
                    </p>
                </div>
            </div>
        </section>
    );
}

function formatMoney(amountStr: string | null): string {
    // Convert the string to a number
    const amount = parseFloat(String(amountStr));

    // Check if the conversion was successful
    if (isNaN(amount)) {
        throw new Error('Invalid number format!');
    }

    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(amount);
}

function getCandidateName(candidate_id: string) {
    const names = new Map();

    names.set(HARRIS_CANDIDATE_ID, 'KAMALA HARRIS');
    names.set(KENNEDY_CANDIDATE_ID, 'ROBERT F. SHANAHAN NICOLE KENNEDY JR.');
    names.set(TRUMP_CANDIDATE_ID, 'DONALD J. TRUMP');

    return names.has(candidate_id)
        ? names.get(candidate_id)
        : `Candidate ${candidate_id}`;
}
