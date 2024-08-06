import { nextSynthqlRequestHandler } from '@/handler';

export async function GET(request: Request) {
    return Response.json(
        { message: 'Success!', request: JSON.stringify(request, null, 2) },
        { status: 200 },
    );
}

export async function POST(request: Request) {
    return await nextSynthqlRequestHandler(request);
}
