/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      // style-guide.md의 색상 팔레트
      colors: {
        // Primary
        'orange-500': '#FC7614',
        
        // Neutral
        'white': '#FFFFFF',
        'black': '#000000',
        
        // Grey Scale
        'grey-950': '#131518',
        'grey-900': '#262E38',
        'grey-500': '#969FAD',
        
        // Gradient용 추가 색상
        'grey-800': '#232A34',
        'grey-850': '#181E27',
      },
      
      // style-guide.md의 spacing 토큰
      spacing: {
        'spacing-0': '0px',
        'spacing-100': '8px',
        'spacing-200': '16px',
        'spacing-300': '24px',
        'spacing-400': '32px',
        'spacing-500': '40px',
        'spacing-1300': '104px',
        'spacing-1700': '136px',
      },
      
      // style-guide.md의 타이포그래피
      fontFamily: {
        'overpass': ['Overpass', 'sans-serif'],
      },
      
      // Text Preset 기반 폰트 크기
      fontSize: {
        'preset-1': ['28px', { lineHeight: '35px', letterSpacing: '0px' }],
        'preset-2': ['24px', { lineHeight: '30px', letterSpacing: '0px' }],
        'preset-3': ['16px', { lineHeight: '24px', letterSpacing: '0.2px' }],
        'preset-4': ['15px', { lineHeight: '24px', letterSpacing: '0px' }],
        'preset-4-bold': ['15px', { lineHeight: '19px', letterSpacing: '2px' }],
        'preset-5': ['14px', { lineHeight: '22px', letterSpacing: '0px' }],
        'preset-5-bold': ['14px', { lineHeight: '18px', letterSpacing: '1.87px' }],
        'preset-5-semibold': ['14px', { lineHeight: '24px', letterSpacing: '0.17px' }],
      },
    },
  },
  plugins: [],
}
