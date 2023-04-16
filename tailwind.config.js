/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {


    colors:{
      primary:'#605cff ',
      secondary:'#ff69b4 ',
      gradient:'#03a89e ',
      text:'#06152b ',
      "text-light" :'#788b9a ',
      "text-disable":'#cfd9e0  ',
      neutral: "#fff",
      //TODO: just change border and bg to light mode
      background:'#222131',
      surface:'#39394b',
      border:'#454a56'
    } ,
    extend: { 
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
 