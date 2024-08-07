import { nextSynthqlRequestHandler } from '@/handler';

export async function OPTIONS() {
    return Response.json(
        {},
        {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers':
                    'Content-Type, Authorization, X-Return-Last-Only',
            },
        },
    );
}

export async function GET(request: Request) {
    return Response.json({
        request: JSON.stringify(request, null, 2),
    });
}

export async function POST(request: Request) {
    return await nextSynthqlRequestHandler(request);
}
