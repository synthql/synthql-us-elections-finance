import { nextSynthqlRequestHandler } from '@/handler';

export async function GET(request: Request) {
    return Response.json({
        request: JSON.stringify(request, null, 2),
    });
}

export async function POST(request: Request) {
    return nextSynthqlRequestHandler(request);
}
