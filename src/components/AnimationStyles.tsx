
export const AnimationStyles = () => (
  <style>{`
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes glow {
      0% {
        box-shadow: 0 0 5px #D946EF, 0 0 10px #D946EF, 0 0 15px #D946EF;
      }
      50% {
        box-shadow: 0 0 10px #D946EF, 0 0 20px #D946EF, 0 0 30px #D946EF;
      }
      100% {
        box-shadow: 0 0 5px #D946EF, 0 0 10px #D946EF, 0 0 15px #D946EF;
      }
    }

    .animate-glow {
      animation: glow 2s ease-in-out infinite;
    }

    @keyframes typewriter {
      0% {
        width: 0;
      }
      100% {
        width: 100%;
      }
    }

    @keyframes fadeout {
      0%, 80% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }

    .animate-typewriter {
      overflow: hidden;
      display: inline-block;
      position: relative;
      white-space: nowrap;
      border-right: 2px solid;
      animation: 
        typewriter 2s steps(20, end) forwards,
        blink 0.75s step-end infinite,
        fadeout 4s forwards;
    }

    @keyframes blink {
      from, to {
        border-color: transparent;
      }
      50% {
        border-color: currentColor;
      }
    }
  `}</style>
);
