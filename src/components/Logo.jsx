import logo from '/logo_svg.svg'

const Logo = ({ size = 80, className = '', animated = true }) => {
  return (
    <>
      <style>{`
        @keyframes koaRotateGlow {
          0% {
            transform: rotate(0deg) scale(1);
            filter:
              drop-shadow(0 0 5px rgba(43,127,117,.35))
              drop-shadow(0 0 10px rgba(43,127,117,.25));
          }

          25% {
            filter:
              drop-shadow(0 0 10px rgba(43,127,117,.55))
              drop-shadow(0 0 18px rgba(43,127,117,.40));
          }

          50% {
            transform: rotate(180deg) scale(1.02);
            filter:
              drop-shadow(0 0 16px rgba(43,127,117,.85))
              drop-shadow(0 0 30px rgba(43,127,117,.65))
              drop-shadow(0 0 45px rgba(43,127,117,.35));
          }

          75% {
            filter:
              drop-shadow(0 0 10px rgba(43,127,117,.55))
              drop-shadow(0 0 18px rgba(43,127,117,.40));
          }

          100% {
            transform: rotate(360deg) scale(1);
            filter:
              drop-shadow(0 0 5px rgba(43,127,117,.35))
              drop-shadow(0 0 10px rgba(43,127,117,.25));
          }
        }

        .koa-logo-animation {
          animation: koaRotateGlow 12s linear infinite;
          transform-origin: center;
          will-change: transform, filter;
        }
      `}</style>

      <img
        src={logo}
        alt='KOA AI Logo'
        width={size}
        height={size}
        className={`${animated ? 'koa-logo-animation' : ''} ${className}`}
      />
    </>
  )
}

export default Logo
