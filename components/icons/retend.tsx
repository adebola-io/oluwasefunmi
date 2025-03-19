import type { JSX } from 'retend/jsx-dev-runtime';

export const RetendIcon = (props: JSX.IntrinsicElements['svg']) => (
  <svg
    {...props}
    class={[props.class, 'h-18 w-18']}
    width="355"
    height="355"
    viewBox="0 0 355 355"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title xmlns="http://www.w3.org/2000/svg">Retend Icon</title>
    <rect
      class="duration-[calc(var(--duration)*2)] transition-[stroke]"
      xmlns="http://www.w3.org/2000/svg"
      x="6"
      y="6"
      width="343"
      height="343"
      rx="54"
      stroke="var(--primary-color)"
      stroke-width="12"
    />
    <path
      class="duration-[calc(var(--duration)*2)] transition-[fill]"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M147.207 75.2436C162.255 75.2436 174.619 86.7364 176 101.423V109.515L122.768 122.693C117.288 124.05 113.945 129.592 115.302 135.072C115.663 136.53 116.069 138.064 116.48 139.621L116.481 139.622C117.215 142.398 117.969 145.247 118.521 147.865C118.547 147.987 118.575 148.109 118.605 148.231L124.409 172H105.423C90.7364 170.619 79.2436 158.255 79.2436 143.207V104.164C79.2436 88.1919 92.1919 75.2436 108.164 75.2436H147.207ZM105.424 184C90.7365 185.381 79.2436 197.744 79.2436 212.793V251.836C79.2436 267.808 92.1919 280.756 108.164 280.756H147.207C163.18 280.756 176.128 267.808 176.128 251.836V212.793C176.128 198.284 165.444 186.27 151.515 184.19L151.468 184H149.948C150.475 184.049 150.997 184.113 151.515 184.19L170.333 261.248C171.868 267.536 168.016 273.878 161.728 275.414C155.44 276.95 149.097 273.097 147.562 266.809L127.34 184H105.424ZM149.948 172C164.048 170.674 175.204 159.227 176.074 145H176V130.576L143.439 138.637C141.762 139.052 140.966 140.992 141.375 142.67L148.538 172H149.948ZM216.793 172.128C201.422 172.128 188.852 160.138 187.926 145H188V127.606L275.316 105.989C280.769 104.639 284.106 99.1441 282.801 93.6902C284.064 96.938 284.756 100.47 284.756 104.164V143.207C284.756 159.18 271.808 172.128 255.836 172.128H216.793ZM280.954 89.8202C281.796 90.9097 282.43 92.1879 282.782 93.6101L282.797 93.6733L282.801 93.6902C282.28 92.3488 281.661 91.0559 280.954 89.8202ZM280.954 89.8202C275.97 81.1117 266.588 75.2436 255.836 75.2436H216.793C201.744 75.2436 189.381 86.7366 188 101.424V106.544L270.403 86.1441C274.461 85.1395 278.553 86.7116 280.954 89.8202Z"
      fill="var(--primary-color)"
    />
  </svg>
);
