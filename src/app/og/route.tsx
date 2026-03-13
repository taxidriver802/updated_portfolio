import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 80,
        background: '#0f172a',
        color: 'white',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      Jason Cox
    </div>,
    {
      width: 1200,
      height: 630,
    }
  );
}
