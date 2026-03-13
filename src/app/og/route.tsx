import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export async function GET() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        position: 'relative',
        overflow: 'hidden',
        background:
          'radial-gradient(circle at top, #1e293b 0%, #0f172a 45%, #020617 100%)',
        color: '#f8fafc',
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      {/* background glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 20% 20%, rgba(96,165,250,0.18), transparent 30%), radial-gradient(circle at 80% 25%, rgba(59,130,246,0.14), transparent 28%), radial-gradient(circle at 50% 100%, rgba(148,163,184,0.08), transparent 40%)',
        }}
      />

      {/* diagonal accents */}
      <div
        style={{
          position: 'absolute',
          top: -120,
          right: -120,
          width: 520,
          height: 520,
          border: '1px solid rgba(96,165,250,0.18)',
          transform: 'rotate(35deg)',
          borderRadius: 48,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: -180,
          left: -100,
          width: 420,
          height: 420,
          border: '1px solid rgba(148,163,184,0.12)',
          transform: 'rotate(35deg)',
          borderRadius: 48,
        }}
      />

      {/* main content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '56px 72px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 18,
            maxWidth: 920,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
            }}
          >
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: 999,
                background: '#60a5fa',
                boxShadow: '0 0 30px rgba(96,165,250,0.8)',
              }}
            />
            <div
              style={{
                fontSize: 26,
                letterSpacing: 4,
                textTransform: 'uppercase',
                color: '#93c5fd',
                fontWeight: 700,
              }}
            >
              Full-Stack Developer
            </div>
          </div>

          <div
            style={{
              fontSize: 88,
              lineHeight: 1,
              fontWeight: 800,
              letterSpacing: -3,
            }}
          >
            Jason Cox
          </div>

          <div
            style={{
              fontSize: 30,
              lineHeight: 1.35,
              color: '#cbd5e1',
              maxWidth: 920,
            }}
          >
            Building modern web applications with React, Node.js, and
            PostgreSQL.
          </div>

          <div
            style={{
              display: 'flex',
              gap: 14,
              flexWrap: 'wrap',
              marginTop: 12,
            }}
          >
            {['React', 'Next.js', 'Node.js', 'PostgreSQL', 'MongoDB'].map(
              (item) => (
                <div
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '12px 18px',
                    borderRadius: 999,
                    fontSize: 22,
                    fontWeight: 600,
                    color: '#e2e8f0',
                    background: 'rgba(15,23,42,0.7)',
                    border: '1px solid rgba(148,163,184,0.24)',
                  }}
                >
                  {item}
                </div>
              )
            )}
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
              marginTop: 22,
            }}
          >
            <div
              style={{
                fontSize: 22,
                letterSpacing: 3,
                textTransform: 'uppercase',
                color: '#93c5fd',
                fontWeight: 700,
              }}
            >
              Featured Projects
            </div>

            <div
              style={{
                fontSize: 34,
                lineHeight: 1.2,
                fontWeight: 700,
                color: '#f8fafc',
              }}
            >
              Goaly • Chatty • Realtor CRM
            </div>
          </div>

          <div
            style={{
              marginTop: 28,
              display: 'flex',
              alignItems: 'center',
              gap: 16,
            }}
          >
            <div
              style={{
                height: 1,
                width: 120,
                background: 'rgba(148,163,184,0.35)',
              }}
            />
            <div
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: '#93c5fd',
              }}
            >
              jasoncox.dev
            </div>
          </div>
        </div>
      </div>
    </div>,
    {
      ...size,
    }
  );
}
