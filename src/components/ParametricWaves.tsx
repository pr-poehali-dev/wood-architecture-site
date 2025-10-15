const ParametricWaves = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <svg
        className="absolute w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(20, 70%, 27%)" stopOpacity="0.3">
              <animate
                attributeName="stop-color"
                values="hsl(20, 70%, 27%);hsl(30, 55%, 53%);hsl(20, 70%, 27%)"
                dur="8s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="hsl(30, 55%, 53%)" stopOpacity="0.2">
              <animate
                attributeName="stop-color"
                values="hsl(30, 55%, 53%);hsl(39, 77%, 83%);hsl(30, 55%, 53%)"
                dur="8s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>

          <linearGradient id="waveGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(30, 55%, 53%)" stopOpacity="0.25">
              <animate
                attributeName="stop-color"
                values="hsl(30, 55%, 53%);hsl(20, 70%, 27%);hsl(30, 55%, 53%)"
                dur="10s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="hsl(39, 77%, 83%)" stopOpacity="0.15">
              <animate
                attributeName="stop-color"
                values="hsl(39, 77%, 83%);hsl(30, 55%, 53%);hsl(39, 77%, 83%)"
                dur="10s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
        </defs>

        <path
          d="M0,200 Q360,100 720,200 T1440,200 L1440,0 L0,0 Z"
          fill="url(#waveGradient1)"
          opacity="0.6"
        >
          <animate
            attributeName="d"
            values="
              M0,200 Q360,100 720,200 T1440,200 L1440,0 L0,0 Z;
              M0,150 Q360,250 720,150 T1440,150 L1440,0 L0,0 Z;
              M0,200 Q360,100 720,200 T1440,200 L1440,0 L0,0 Z
            "
            dur="12s"
            repeatCount="indefinite"
          />
        </path>

        <path
          d="M0,300 Q360,200 720,300 T1440,300 L1440,0 L0,0 Z"
          fill="url(#waveGradient2)"
          opacity="0.4"
        >
          <animate
            attributeName="d"
            values="
              M0,300 Q360,200 720,300 T1440,300 L1440,0 L0,0 Z;
              M0,250 Q360,350 720,250 T1440,250 L1440,0 L0,0 Z;
              M0,300 Q360,200 720,300 T1440,300 L1440,0 L0,0 Z
            "
            dur="15s"
            repeatCount="indefinite"
          />
        </path>

        <path
          d="M0,600 C240,650 480,550 720,600 C960,650 1200,550 1440,600 L1440,800 L0,800 Z"
          fill="url(#waveGradient1)"
          opacity="0.5"
        >
          <animate
            attributeName="d"
            values="
              M0,600 C240,650 480,550 720,600 C960,650 1200,550 1440,600 L1440,800 L0,800 Z;
              M0,550 C240,500 480,600 720,550 C960,500 1200,600 1440,550 L1440,800 L0,800 Z;
              M0,600 C240,650 480,550 720,600 C960,650 1200,550 1440,600 L1440,800 L0,800 Z
            "
            dur="18s"
            repeatCount="indefinite"
          />
        </path>

        <path
          d="M0,700 C300,650 600,750 900,700 C1200,650 1350,750 1440,700 L1440,800 L0,800 Z"
          fill="url(#waveGradient2)"
          opacity="0.3"
        >
          <animate
            attributeName="d"
            values="
              M0,700 C300,650 600,750 900,700 C1200,650 1350,750 1440,700 L1440,800 L0,800 Z;
              M0,750 C300,800 600,700 900,750 C1200,800 1350,700 1440,750 L1440,800 L0,800 Z;
              M0,700 C300,650 600,750 900,700 C1200,650 1350,750 1440,700 L1440,800 L0,800 Z
            "
            dur="20s"
            repeatCount="indefinite"
          />
        </path>
      </svg>

      <div className="absolute top-20 left-10 w-32 h-32 opacity-30">
        <svg viewBox="0 0 100 100" className="animate-float">
          <path
            d="M20,50 Q35,30 50,50 T80,50"
            stroke="hsl(20, 70%, 27%)"
            strokeWidth="2"
            fill="none"
            opacity="0.5"
          >
            <animate
              attributeName="d"
              values="
                M20,50 Q35,30 50,50 T80,50;
                M20,50 Q35,70 50,50 T80,50;
                M20,50 Q35,30 50,50 T80,50
              "
              dur="4s"
              repeatCount="indefinite"
            />
          </path>
          <path
            d="M20,60 Q35,40 50,60 T80,60"
            stroke="hsl(30, 55%, 53%)"
            strokeWidth="2"
            fill="none"
            opacity="0.4"
          >
            <animate
              attributeName="d"
              values="
                M20,60 Q35,40 50,60 T80,60;
                M20,60 Q35,80 50,60 T80,60;
                M20,60 Q35,40 50,60 T80,60
              "
              dur="5s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>

      <div className="absolute bottom-32 right-20 w-40 h-40 opacity-25">
        <svg viewBox="0 0 100 100" className="animate-float" style={{ animationDelay: '1s' }}>
          <circle cx="50" cy="50" r="30" fill="none" stroke="hsl(20, 70%, 27%)" strokeWidth="1.5" opacity="0.4">
            <animate attributeName="r" values="30;35;30" dur="6s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.4;0.6;0.4" dur="6s" repeatCount="indefinite" />
          </circle>
          <circle cx="50" cy="50" r="20" fill="none" stroke="hsl(30, 55%, 53%)" strokeWidth="1.5" opacity="0.3">
            <animate attributeName="r" values="20;25;20" dur="5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.3;0.5;0.3" dur="5s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>

      <div className="absolute top-1/3 right-1/4 w-24 h-24 opacity-20">
        <svg viewBox="0 0 100 100" className="animate-float" style={{ animationDelay: '2s' }}>
          <path
            d="M10,50 C10,30 30,10 50,10 C70,10 90,30 90,50 C90,70 70,90 50,90 C30,90 10,70 10,50"
            fill="none"
            stroke="hsl(39, 77%, 83%)"
            strokeWidth="2"
            opacity="0.5"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 50 50"
              to="360 50 50"
              dur="30s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>
    </div>
  );
};

export default ParametricWaves;
