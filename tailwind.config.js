/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F4F1ED',
        card: '#1E3A8A',
        primary: '#295C7A',
        secondary: '#F7A600',
        success: '#4CAF50',
        error: '#D32F2F',
        text: '#2C2C2C',
        textSecondary: '#7A7A7A',
        alertBackground: '#FFF3CD',
        alertText: '#856404',
        accent: '#F7A600',
        muted: '#E5E7EB',
      },
      fontFamily: {
        'title': ['"DM Serif Display"', 'Georgia', 'serif'],
        'body': ['Lato', 'Arial', 'sans-serif'],
        'display': ['"DM Serif Display"', 'Georgia', 'serif'],
        'serif': ['"DM Serif Display"', 'Georgia', 'serif'],
        'sans': ['Lato', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'title': ['32px', { lineHeight: '38px', fontWeight: '600' }],
        'subtitle': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'card-title': ['18px', { lineHeight: '24px', fontWeight: '600' }],
        'description': ['14px', { lineHeight: '20px', fontWeight: '400' }],
        'section-title': ['20px', { lineHeight: '28px', fontWeight: '600' }],
        'step-number': ['16px', { lineHeight: '24px', fontWeight: '600' }],
        'button-text': ['18px', { lineHeight: '24px', fontWeight: '600' }],
      },
    },
  },
  plugins: [],
}
