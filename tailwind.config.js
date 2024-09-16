/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        'primary': '#FFFFFF',
        'lightPurple' : '#DDCEFF',
        'lightGrey': '#E0DDDD',
        'lightGreen' : '#7DF6A6',
        'lightBlue' : '#94FBFF',
        'deepBlue' : '#12ADA0',
        'deepGreen' : '#D1FF66',
      },
      borderColor: {
        'lightGreen': '#95FF5C', 
        'lightPurple': '#DDCEFF',
        'secondLine': '#896635',
        'insideLine': '#372711',
        'bookLine' :'#252B25',
      },
      
      fontSize: {
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
        '2xl': ['2rem', {
        lineHeight: '2rem',
        fontWeight: '400',
      }],
      },
    },
  },
  plugins: [],
}
