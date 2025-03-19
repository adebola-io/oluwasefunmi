import type { JSX } from 'retend/jsx-runtime';

export const SiphonIcon = (props: JSX.IntrinsicElements['svg']) => (
  <svg
    {...props}
    class={[props.class, 'w-17 h-17 siphon-icon']}
    width="415"
    height="415"
    viewBox="0 0 415 415"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs xmlns="http://www.w3.org/2000/svg">
      <style xmlns="http://www.w3.org/2000/svg">
        {'.siphon-icon path { transition: fill var(--tw-duration) }'}
      </style>
    </defs>
    <title xmlns="http://www.w3.org/2000/svg">Siphon Icon</title>
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M215 53C272.75 53 330.5 53 390 53C389.185 57.0752 388.551 59.224 386.675 62.7246C386.17 63.6802 385.664 64.6357 385.144 65.6202C384.291 67.2159 384.291 67.2159 383.422 68.8438C382.134 71.2913 380.849 73.7401 379.568 76.1914C379.215 76.8675 378.862 77.5435 378.498 78.24C373.445 87.9425 368.585 97.7424 363.703 107.531C362.686 109.569 361.669 111.606 360.652 113.644C357.516 119.928 354.383 126.214 351.25 132.5C347.587 139.849 343.924 147.197 340.256 154.544C338.816 157.431 337.378 160.319 335.94 163.208C331.725 171.662 327.461 180.082 323.036 188.428C317.926 198.067 313.036 207.811 308.174 217.577C306.61 220.719 305.043 223.859 303.475 226.999C300.148 233.665 296.824 240.332 293.5 247C289.641 254.742 285.78 262.484 281.916 270.223C280.392 273.279 278.869 276.336 277.347 279.393C272.551 289.01 267.678 298.576 262.645 308.072C258.124 316.619 253.805 325.264 249.492 333.918C248.632 335.64 247.772 337.361 246.912 339.083C244.684 343.542 242.459 348.002 240.234 352.462C237.949 357.043 235.662 361.622 233.375 366.201C228.914 375.133 224.456 384.066 220 393C216.174 392.194 216.174 392.194 214.606 390.447C213.974 389.437 213.974 389.437 213.328 388.406C212.837 387.636 212.346 386.866 211.84 386.072C211.315 385.223 210.791 384.375 210.25 383.5C209.689 382.615 209.129 381.73 208.551 380.818C207.333 378.896 206.121 376.971 204.912 375.043C201.643 369.84 198.316 364.673 195 359.5C193.635 357.365 192.271 355.229 190.906 353.094C187.462 347.713 183.989 342.352 180.5 337C174.93 328.458 169.431 319.871 163.941 311.277C159.822 304.833 155.677 298.407 151.5 292C146.626 284.526 141.804 277.02 137 269.5C130.539 259.386 124.021 249.311 117.469 239.255C109.934 227.685 102.479 216.065 95.0437 204.431C90.3744 197.131 85.667 189.857 80.9341 182.598C75.8908 174.854 70.9165 167.066 65.9414 159.277C61.8219 152.833 57.6773 146.407 53.5 140C47.8952 131.404 42.3534 122.768 36.8359 114.115C33.7656 109.303 30.6841 104.501 27.5391 99.7383C27.021 98.9509 26.503 98.1635 25.9692 97.3523C25.0177 95.9098 24.0607 94.4709 23.0972 93.0364C20 88.3327 20 88.3327 20 85C80.39 85 140.78 85 203 85C203 92.92 203 100.84 203 109C201.265 109.006 199.531 109.012 197.743 109.018C181.424 109.075 165.105 109.147 148.785 109.236C140.395 109.281 132.004 109.32 123.614 109.346C116.302 109.369 108.99 109.403 101.678 109.449C97.805 109.473 93.9323 109.491 90.0594 109.498C86.4158 109.504 82.7726 109.524 79.1291 109.554C77.1509 109.567 75.1726 109.565 73.1944 109.563C72.0207 109.576 70.847 109.588 69.6377 109.601C68.6155 109.606 67.5932 109.61 66.54 109.615C63.6528 110.053 62.7645 110.732 61 113C64.257 119.864 67.9165 126.242 72.125 132.562C73.2879 134.331 74.4507 136.099 75.6133 137.867C76.4749 139.172 76.4749 139.172 77.354 140.503C79.6933 144.052 82.0055 147.618 84.3125 151.188C84.7466 151.858 85.1807 152.529 85.6279 153.22C89.7331 159.569 93.8031 165.941 97.875 172.312C104.379 182.488 110.938 192.626 117.531 202.745C125.066 214.315 132.521 225.935 139.956 237.569C144.626 244.869 149.333 252.143 154.066 259.402C158.414 266.078 162.711 272.786 167 279.5C173.457 289.607 179.971 299.675 186.518 309.723C189.294 313.988 192.055 318.262 194.815 322.538C197.375 326.501 199.951 330.454 202.539 334.398C203.135 335.309 203.731 336.22 204.346 337.158C205.511 338.937 206.679 340.715 207.85 342.49C208.376 343.295 208.903 344.1 209.445 344.93C209.915 345.644 210.384 346.358 210.868 347.093C212 349 212 349 213 352C214.9 352.038 214.9 352.038 217 351C218.419 348.666 219.564 346.472 220.688 344C221.391 342.521 222.097 341.043 222.805 339.566C223.167 338.805 223.528 338.043 223.901 337.258C225.247 334.492 226.688 331.785 228.154 329.081C232.018 321.932 235.622 314.69 239.095 307.344C244.645 295.678 250.377 284.111 256.163 272.561C257.229 270.429 258.294 268.298 259.36 266.166C262.213 260.46 265.068 254.756 267.924 249.051C270.618 243.669 273.309 238.286 276.001 232.903C281.324 222.261 286.647 211.62 291.972 200.98C297.136 190.661 302.3 180.342 307.462 170.022C307.781 169.383 308.101 168.743 308.43 168.085C310.035 164.878 311.639 161.67 313.243 158.463C326.493 131.974 339.746 105.487 353 79C350.41 76.1629 348.505 75.0858 344.569 74.8613C343.599 74.8549 342.628 74.8484 341.628 74.8418C340.513 74.832 339.398 74.8222 338.25 74.8121C337.026 74.8064 335.803 74.8006 334.542 74.7947C332.61 74.7798 332.61 74.7798 330.639 74.7647C327.107 74.7376 323.574 74.7166 320.041 74.6967C316.35 74.6748 312.658 74.6474 308.966 74.6206C301.976 74.5707 294.984 74.5258 287.993 74.4826C280.035 74.4332 272.076 74.3783 264.117 74.3229C247.745 74.2091 231.372 74.1025 215 74C215 67.07 215 60.14 215 53Z"
      fill="var(--primary-color)"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M77 121C118.58 121 160.16 121 203 121C203 136.18 203 151.36 203 167C197.39 168.65 191.78 170.3 186 172C168.226 180.973 157.715 193.356 151.285 212.082C149.515 218.219 149.367 224.656 149 231C148.01 231 147.02 231 146 231C144.796 229.621 144.796 229.621 143.609 227.652C143.155 226.914 142.7 226.175 142.232 225.414C141.743 224.596 141.254 223.779 140.75 222.938C139.675 221.188 138.598 219.439 137.52 217.691C136.949 216.763 136.379 215.835 135.792 214.879C132.752 209.994 129.593 205.187 126.438 200.375C125.157 198.418 123.877 196.461 122.598 194.504C121.986 193.568 121.373 192.633 120.743 191.668C118.275 187.89 115.823 184.103 113.375 180.312C109.427 174.202 105.467 168.099 101.5 162C91.4325 146.518 91.4325 146.518 86.457 138.801C84.9048 136.394 83.3405 133.995 81.7617 131.605C81.1185 130.622 80.4752 129.638 79.8125 128.625C79.2621 127.792 78.7116 126.96 78.1445 126.102C77 124 77 124 77 121Z"
      fill="var(--secondary-color)"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M215 85C255.59 85 296.18 85 338 85C336.876 91.7429 336.876 91.7429 334.844 95.4834C334.39 96.3348 333.935 97.1861 333.466 98.0633C332.713 99.4474 332.713 99.4474 331.945 100.859C330.843 102.929 329.743 105 328.646 107.072C328.055 108.187 327.464 109.303 326.856 110.451C323.531 116.776 320.364 123.182 317.18 129.578C316.497 130.947 315.814 132.317 315.131 133.686C313.043 137.873 310.959 142.061 308.875 146.25C306.104 151.819 303.332 157.387 300.555 162.953C300.222 163.62 299.889 164.287 299.547 164.974C295.179 173.724 290.731 182.424 286.137 191.057C282.7 197.521 279.495 204.088 276.418 210.73C276.025 211.544 275.632 212.357 275.227 213.195C274.725 214.263 274.725 214.263 274.213 215.352C273 217 273 217 270.861 217.738C270.247 217.824 269.633 217.911 269 218C268.865 217.368 268.729 216.737 268.59 216.086C267.164 210.161 265.166 204.861 262.438 199.438C261.98 198.527 261.98 198.527 261.513 197.597C260.199 195.055 259.036 193.036 257 191C257.325 186.647 258.576 183.434 260.668 179.641C261.225 178.62 261.781 177.6 262.355 176.549C262.96 175.46 263.564 174.372 264.188 173.25C265.14 171.51 266.092 169.769 267.044 168.029C268.033 166.222 269.025 164.417 270.019 162.612C273.749 155.824 277.405 148.995 281.065 142.168C283.651 137.349 286.247 132.54 288.914 127.766C289.345 126.983 289.777 126.2 290.221 125.393C291.003 123.975 291.795 122.564 292.601 121.16C294.208 118.22 295.041 116.434 294.723 113.051C294.365 112.036 294.365 112.036 294 111C290.5 109.833 287.326 109.825 283.683 109.795C282.941 109.785 282.199 109.775 281.435 109.765C278.984 109.733 276.533 109.708 274.082 109.684C272.382 109.663 270.683 109.642 268.983 109.621C264.51 109.565 260.037 109.516 255.563 109.468C250.999 109.418 246.434 109.362 241.869 109.307C232.913 109.199 223.956 109.098 215 109C215 101.08 215 93.16 215 85Z"
      fill="var(--secondary-color)"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M203 180C203 211.68 203 243.36 203 276C191.141 274.682 180.034 270.225 172 261C161.862 247.81 159.39 234.265 161 218C162.548 209.905 166.082 203.526 171 197C171.866 195.701 171.866 195.701 172.75 194.375C180.407 186.292 191.694 180 203 180Z"
      fill="var(--secondary-color)"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M215 121C236.45 121 257.9 121 280 121C279.096 125.52 277.759 128.754 275.605 132.715C275.262 133.359 274.918 134.004 274.563 134.668C273.444 136.761 272.316 138.849 271.188 140.938C270.416 142.375 269.646 143.814 268.875 145.252C266.594 149.507 264.299 153.755 262 158C261.665 158.618 261.33 159.236 260.986 159.873C257.345 166.594 253.685 173.303 250 180C245.801 179.268 243.154 178.014 239.562 175.688C233.009 171.733 226.402 169.774 219 168C217.68 167.67 216.36 167.34 215 167C215 151.82 215 136.64 215 121Z"
      fill="var(--secondary-color)"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M248 204C249.32 204 250.64 204 252 204C257.717 218.26 260.446 231.795 254.551 246.652C248.052 260.852 238.609 269.553 224 275C221.01 275.915 218.372 276.108 215.25 276.062C214.451 276.053 213.652 276.044 212.828 276.035C212.225 276.024 211.622 276.012 211 276C211.607 271.458 213.463 267.824 215.613 263.848C215.979 263.159 216.345 262.471 216.722 261.761C217.912 259.525 219.112 257.294 220.312 255.062C221.136 253.522 221.958 251.981 222.78 250.439C228.678 239.398 234.637 228.39 240.67 217.422C243.124 212.954 245.561 208.476 248 204Z"
      fill="var(--secondary-color)"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M238 282C237.503 288.081 234.819 292.872 232.09 298.211C231.359 299.663 231.359 299.663 230.614 301.145C229.063 304.225 227.5 307.3 225.938 310.375C224.881 312.467 223.826 314.56 222.771 316.652C220.189 321.773 217.598 326.888 215 332C211.207 331.244 211.207 331.244 209.344 329.045C208.806 328.195 208.269 327.345 207.715 326.469C206.803 325.046 206.803 325.046 205.872 323.595C205.234 322.574 204.595 321.552 203.938 320.5C203.277 319.464 202.617 318.429 201.937 317.362C200.592 315.252 199.251 313.14 197.916 311.024C195.23 306.784 192.49 302.58 189.75 298.375C188.157 295.923 186.574 293.465 185 291C184.407 290.085 183.814 289.17 183.203 288.227C182 286 182 286 182 283C186.148 283.461 189.787 284.252 193.75 285.562C206.397 289.108 220.586 287.986 232.602 282.898C235 282 235 282 238 282Z"
      fill="var(--secondary-color)"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M215 180C221.016 180.752 224.281 181.25 229.5 183.562C231.062 184.245 231.062 184.245 232.656 184.941C233.816 185.465 233.816 185.465 235 186C235 186.66 235 187.32 235 188C235.99 188 236.98 188 238 188C238.33 188.66 238.66 189.32 239 190C239.99 190.33 240.98 190.66 242 191C241.571 197.195 238.615 201.84 235.625 207.125C235.094 208.08 234.563 209.034 234.017 210.018C232.909 212.011 231.797 214.001 230.683 215.99C228.011 220.77 225.383 225.574 222.75 230.375C221.168 233.251 219.584 236.125 218 239C217.01 239 216.02 239 215 239C215 219.53 215 200.06 215 180Z"
      fill="var(--secondary-color)"
    />
  </svg>
);
