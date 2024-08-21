import { queryEngine } from './queryEngine';
import { createNextSynthqlHandler } from '@synthql/handler-next';

export const nextSynthqlRequestHandler = createNextSynthqlHandler(queryEngine);
