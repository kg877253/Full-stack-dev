import React, { useState } from 'react'

const AnimatedLogo = ({ size = 55 }) => {
  const [unlocked, setUnlocked] = useState(false)
  const [sparkles, setSparkles] = useState([])

  const handleClick = () => {
    setUnlocked(true)

    // spawn sparkle burst
    const newSparkles = Array.from({ length: 8 }).map((_, i) => ({
      id: Date.now() + i,
      angle: (360 / 8) * i,
    }))
    setSparkles(newSparkles)

    // auto re-lock + clear sparkles after animation
    setTimeout(() => setUnlocked(false), 1400)
    setTimeout(() => setSparkles([]), 900)
  }

  return (
    <div
      className="logo-wrapper"
      style={{ width: size, height: size }}
      onClick={handleClick}
    >
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        className={`logo-svg ${unlocked ? 'is-unlocked' : ''}`}
      >
        <defs>
          <linearGradient id="lockGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4ade80" />
            <stop offset="100%" stopColor="#16a34a" />
          </linearGradient>
        </defs>

        {/* Shackle - rotates open on hover / click */}
        <path
          className="logo-shackle"
          d="M32 46V32a18 18 0 0 1 36 0v14"
          fill="none"
          stroke="url(#lockGradient)"
          strokeWidth="9"
          strokeLinecap="round"
        />

        {/* Body */}
        <rect
          className="logo-body"
          x="22"
          y="44"
          width="56"
          height="42"
          rx="9"
          fill="url(#lockGradient)"
        />

        {/* Keyhole */}
        <circle className="logo-keyhole" cx="50" cy="61" r="5.5" fill="#1e1e1e" />
        <rect className="logo-keyhole" x="46.5" y="65" width="7" height="12" rx="3" fill="#1e1e1e" />
      </svg>

      {/* Sparkle burst */}
      {sparkles.map((s) => (
        <span
          key={s.id}
          className="sparkle"
          style={{ '--angle': `${s.angle}deg` }}
        />
      ))}

      <style>{`
        .logo-wrapper {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .logo-svg {
          animation: logoFloat 3s ease-in-out infinite, logoGlow 2.5s ease-in-out infinite;
          transition: transform 0.3s ease;
        }

        .logo-wrapper:hover .logo-svg {
          transform: scale(1.12);
        }

        .logo-shackle {
          transform-origin: 32px 46px;
          transition: transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .logo-wrapper:hover .logo-shackle {
          transform: rotate(-22deg) translateX(-2px);
        }

        .logo-svg.is-unlocked .logo-shackle {
          transform: rotate(-48deg) translateX(-4px) translateY(-2px);
        }

        .logo-body {
          transition: transform 0.2s ease;
          transform-origin: 50px 65px;
        }

        .logo-wrapper:active .logo-body {
          transform: scale(0.94);
        }

        .logo-svg.is-unlocked .logo-body {
          animation: bodyPulse 0.5s ease;
        }

        @keyframes logoFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }

        @keyframes logoGlow {
          0%, 100% { filter: drop-shadow(0 0 3px rgba(74, 222, 128, 0.35)); }
          50% { filter: drop-shadow(0 0 10px rgba(74, 222, 128, 0.75)); }
        }

        @keyframes bodyPulse {
          0% { transform: scale(1); }
          40% { transform: scale(1.15); }
          100% { transform: scale(1); }
        }

        .sparkle {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #4ade80;
          transform: translate(-50%, -50%);
          animation: sparkleBurst 0.8s ease-out forwards;
        }

        @keyframes sparkleBurst {
          0% {
            opacity: 1;
            transform: translate(-50%, -50%) rotate(var(--angle)) translateX(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) rotate(var(--angle)) translateX(38px) scale(0.3);
          }
        }
      `}</style>
    </div>
  )
}

export default AnimatedLogo
