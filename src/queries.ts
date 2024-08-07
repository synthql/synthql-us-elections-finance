import { from } from './generated';

export const q = from('candidate_finances')
    .columns(
        'candidate_id',
        'receipts',
        'disbursements',
        'last_cash_on_hand_end_period',
        'last_debts_owed_to_committee',
        'last_debts_owed_by_committee',
    )
    .take(3);
