import { getFromStorage } from '../services/auth'

export const APP_ROUTES = [
  {
    name: 'Home',
    icon: (fill) => (
      <svg
        width="21"
        height="17"
        viewBox="0 0 21 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        cursor="pointer"
      >
        <path
          d="M8.57501 17V11H12.575V17H17.575V9H20.575L10.575 0L0.575012 9H3.57501V17H8.57501Z"
          fill={fill}
        />
      </svg>
    ),
    url: '/',
  },
  {
    name: 'Meu petfil',
    icon: (fill) => (
      <svg
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        cursor="pointer"
      >
        <path
          d="M10.575 0C5.05501 0 0.575012 4.48 0.575012 10C0.575012 15.52 5.05501 20 10.575 20C16.095 20 20.575 15.52 20.575 10C20.575 4.48 16.095 0 10.575 0ZM10.575 3C12.235 3 13.575 4.34 13.575 6C13.575 7.66 12.235 9 10.575 9C8.91501 9 7.57501 7.66 7.57501 6C7.57501 4.34 8.91501 3 10.575 3ZM10.575 17.2C8.07501 17.2 5.86501 15.92 4.57501 13.98C4.60501 11.99 8.57501 10.9 10.575 10.9C12.565 10.9 16.545 11.99 16.575 13.98C15.285 15.92 13.075 17.2 10.575 17.2Z"
          fill={fill}
        />
      </svg>
    ),
    url: `/profile/${getFromStorage('user')?.id ?? ''}`,
  },

  {
    name: 'Sair',
    icon: (fill) => (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        cursor="pointer"
      >
        <path
          d="M7.09 12.59L8.5 14L13.5 9L8.5 4L7.09 5.41L9.67 8H0V10H9.67L7.09 12.59ZM16 0H2C0.89 0 0 0.9 0 2V6H2V2H16V16H2V12H0V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0Z"
          fill={fill}
        />
        <path
          d="M7.09 12.59L8.5 14L13.5 9L8.5 4L7.09 5.41L9.67 8H0V10H9.67L7.09 12.59ZM16 0H2C0.89 0 0 0.9 0 2V6H2V2H16V16H2V12H0V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0Z"
          stroke="white"
          fill={fill}
        />
      </svg>
    ),
    url: '/login',
  },
]
