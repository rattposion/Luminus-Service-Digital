import React, { useEffect, useState, useRef } from 'react';

const COUPON = 'LUMINUS20';
const WHATSAPP_MSG = encodeURIComponent('Olá! Quero aproveitar a promoção de 20% de desconto da Luminus Service Digital!');
const WHATSAPP_LINK = `https://wa.me/5599999999999?text=${WHATSAPP_MSG}`; // Substitua pelo seu número

// Sons base64 (explosão e entrada)
const explosionSound = new Audio('https://cdn.pixabay.com/audio/2022/07/26/audio_124bfa4c2e.mp3');
const popinSound = new Audio('https://cdn.pixabay.com/audio/2022/03/15/audio_115b9b7b3e.mp3');

function NeonButton({ onClick, feedback, children }: { onClick: () => void, feedback: string|null, children: React.ReactNode }) {
  const btnRef = useRef<HTMLButtonElement>(null);
  function handleClick(e: React.MouseEvent) {
    const btn = btnRef.current;
    if (!btn) return;
    const ripple = document.createElement('span');
    ripple.className = 'ripple-neon';
    const rect = btn.getBoundingClientRect();
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 700);
    onClick();
  }
  return (
    <div className="relative flex flex-col items-center w-full">
      <button
        ref={btnRef}
        className="w-full max-w-xs px-8 py-4 rounded-full bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600 text-white font-bold text-lg shadow-md hover:scale-105 transition-all duration-200 focus:outline-none overflow-hidden relative"
        onClick={handleClick}
        disabled={!!feedback}
      >
        {children}
      </button>
      {feedback && (
        <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-3 py-1 rounded-full bg-fuchsia-700 text-white font-bold shadow animate-feedback-pop text-sm">
          Cupom copiado!
        </span>
      )}
    </div>
  );
}

const PARTICLE_EMOJIS = ['✨', '💜', '⭐'];
const PARTICLE_COUNT = 8;

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

const PromoBalloon: React.FC = () => {
  const [stage, setStage] = useState<'exploding' | 'balloon' | 'hidden'>('exploding');
  const [showBalloon, setShowBalloon] = useState(false);
  const [feedback, setFeedback] = useState<string|null>(null);
  const hasPlayedPopin = useRef(false);

  useEffect(() => {
    if (stage === 'exploding') {
      explosionSound.currentTime = 0;
      explosionSound.play();
      const timer = setTimeout(() => setStage('balloon'), 700);
      return () => clearTimeout(timer);
    }
    if (stage === 'balloon') {
      if (!hasPlayedPopin.current) {
        popinSound.currentTime = 0;
        popinSound.play();
        hasPlayedPopin.current = true;
      }
      setShowBalloon(true);
      const timer = setTimeout(() => {
        setShowBalloon(false);
        setTimeout(() => setStage('hidden'), 400);
      }, 4200);
      return () => clearTimeout(timer);
    }
  }, [stage]);

  function handleClose() {
    setShowBalloon(false);
    setTimeout(() => setStage('hidden'), 400);
  }

  function handleCopyCoupon() {
    navigator.clipboard.writeText(COUPON);
    setFeedback('Cupom copiado!');
    setTimeout(() => setFeedback(null), 1200);
  }

  if (stage === 'hidden') return null;

  // Explosão inicial rápida
  const emojiParticles = Array.from({ length: PARTICLE_COUNT }).map((_, i) => {
    const angle = (360 / PARTICLE_COUNT) * i;
    const distance = randomBetween(18, 32); // vw
    const size = randomBetween(1.2, 1.7); // rem
    const rotate = randomBetween(-60, 60);
    const duration = randomBetween(400, 700);
    const emoji = PARTICLE_EMOJIS[i % PARTICLE_EMOJIS.length];
    const transformTo = `rotate(${angle}deg) translateY(${distance}vw) rotate(${rotate}deg)`;
    return (
      <span
        key={i}
        className="absolute animate-particle-explode select-none pointer-events-none opacity-70"
        style={{
          left: '50%',
          top: '50%',
          fontSize: `${size}rem`,
          transform: 'translate(-50%, -50%)',
          transformOrigin: 'center',
          '--particle-transform-to': transformTo,
          '--particle-duration': `${duration}ms`,
        } as React.CSSProperties}
      >
        {emoji}
      </span>
    );
  });

  // Botão flutuante do WhatsApp
  const WhatsAppButton = (
    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" title="WhatsApp" className="fixed z-50 bottom-6 right-6 w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 shadow-lg flex items-center justify-center transition-all duration-300 focus:outline-none">
      <svg width="28" height="28" fill="white" viewBox="0 0 24 24"><path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.18-1.62A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.85 0-3.68-.5-5.25-1.45l-.38-.23-3.67.96.98-3.58-.25-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.97.95-.97 2.3 0 1.34.99 2.64 1.13 2.82.14.18 1.95 2.98 4.74 4.06.66.28 1.18.45 1.58.58.66.21 1.26.18 1.73.11.53-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.18-.53-.32z"/></svg>
    </a>
  );

  return (
    <>
      {stage === 'exploding' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none select-none">
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            {emojiParticles}
          </div>
        </div>
      )}
      {stage === 'balloon' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-auto select-none">
          <div className="absolute inset-0 bg-black/40" onClick={handleClose} />
          <div className={`relative flex flex-col items-center justify-center animate-cinematic-in ${showBalloon ? 'show' : ''}`}
            style={{ minWidth: 320, minHeight: 180, maxWidth: 400 }}
            title="Clique para fechar"
          >
            <button
              className="absolute top-2 right-4 text-purple-300 hover:text-fuchsia-400 text-xl font-extrabold focus:outline-none"
              onClick={e => { e.stopPropagation(); handleClose(); }}
              aria-label="Fechar"
            >
              ×
            </button>
            <div className="relative w-full flex flex-col items-center bg-black/70 backdrop-blur-xl rounded-3xl shadow-2xl px-8 py-10">
              <span className="text-4xl mb-3">🎉</span>
              <div className="font-extrabold text-2xl md:text-3xl text-white tracking-wide text-center mb-2">Promoção Especial!</div>
              <div className="mb-4 text-base md:text-lg text-purple-200 font-medium text-center max-w-md">
                Ganhe <span className="text-[#c084fc] font-bold">20% de desconto</span> no seu primeiro projeto com a <span className="font-bold text-white">Luminus Service Digital</span>.<br/>
                Especialistas em <span className="font-bold text-white">Marketing Digital</span> e <span className="font-bold text-white">Desenvolvimento Fullstack</span>.
              </div>
              <NeonButton onClick={handleCopyCoupon} feedback={feedback}>Quero meu desconto!</NeonButton>
              <div className="mt-2 text-xs text-fuchsia-200 select-text">Cupom: <span className="font-mono text-fuchsia-300">{COUPON}</span></div>
            </div>
          </div>
          {WhatsAppButton}
        </div>
      )}
      <style>{`
        .ripple-neon {
          position: absolute;
          width: 80px;
          height: 80px;
          background: radial-gradient(circle, #c084fc55 0%, #a21caf22 80%, transparent 100%);
          border-radius: 50%;
          pointer-events: none;
          transform: translate(-50%, -50%);
          left: 50%;
          top: 50%;
          animation: rippleNeon 0.7s linear;
          z-index: 10;
        }
        @keyframes rippleNeon {
          0% { opacity: 0.7; transform: scale(0.2); }
          80% { opacity: 0.4; transform: scale(1.1); }
          100% { opacity: 0; transform: scale(1.4); }
        }
        .animate-cinematic-in {
          opacity: 0;
          transform: scale(0.7);
          filter: blur(8px) brightness(1.2);
          transition: all 0.7s cubic-bezier(.68,-0.55,.27,1.55);
        }
        .animate-cinematic-in.show {
          opacity: 1;
          transform: scale(1);
          filter: blur(0) brightness(1);
        }
        .animate-particle-explode {
          animation: particleExplode var(--particle-duration, 600ms) cubic-bezier(.68,-0.55,.27,1.55) forwards;
        }
        @keyframes particleExplode {
          0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(1.3) var(--particle-transform-to, '');
          }
        }
        .animate-feedback-pop {
          animation: feedbackPop 0.5s cubic-bezier(.68,-0.55,.27,1.55);
        }
        @keyframes feedbackPop {
          0% { opacity: 0; transform: scale(0.7) translateY(10px); }
          60% { opacity: 1; transform: scale(1.1) translateY(-4px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </>
  );
};

export default PromoBalloon;
