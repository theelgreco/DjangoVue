/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                dark: {
                    DEFAULT: '#363636'
                },
                grays: {
                    light: {
                        50: '#FAFAF9',
                        100: '#F5F5F4',
                        200: '#E7E5E4',
                        300: '#D6D3D1',
                        400: '#A8A29E',
                        500: '#78716C',
                        600: '#57534E',
                        700: '#44403C',
                        800: '#292524',
                        900: '#1C1917',
                        950: '#0C0A09'
                    },
                    dark: {
                        50: '#F8FAFC',
                        100: '#F1F5F9',
                        200: '#E2E8F0',
                        300: '#CBD5E1',
                        400: '#94A3B8',
                        500: '#64748B',
                        600: '#475569',
                        700: '#334155',
                        800: '#1E293B',
                        900: '#0F172A',
                        950: '#020617'
                    }
                },
                primary: {
                    DEFAULT: '#5ce1e6',
                    50: '#e9fbfc',
                    100: '#d3f7f8',
                    200: '#a7eff1',
                    300: '#7be7ea',
                    400: '#5ce1e6',
                    500: '#22d6dd',
                    600: '#1cabb0',
                    700: '#158184',
                    800: '#0e5658',
                    900: '#072b2c',
                    950: '#031516',
                },
                accent: {
                    50: '#ECFEFF',
                    100: '#CFFAFE',
                    200: '#A5F3FC',
                    300: '#67E8F9',
                    400: '#22D3EE',
                    500: '#06B6D4',
                    600: '#0891B2',
                    700: '#0E7490',
                    800: '#155E75',
                    900: '#164E63',
                    950: '#083344'
                },
                state: {
                    success: {
                        50: '#ECFDF5',
                        100: '#D1FAE5',
                        200: '#A7F3D0',
                        300: '#6EE7B7',
                        400: '#34D399',
                        500: '#10B981',
                        600: '#059669',
                        700: '#047857',
                        800: '#065F46',
                        900: '#064E3B',
                        950: '#022C22'
                    },
                    danger: {
                        50: '#FEF2F2',
                        100: '#FEE2E2',
                        200: '#FECACA',
                        300: '#FCA5A5',
                        400: '#F87171',
                        500: '#EF4444',
                        600: '#DC2626',
                        700: '#B91C1C',
                        800: '#991B1B',
                        900: '#7F1D1D',
                        950: '#450A0A'
                    },
                    warning: {
                        50: '#FFFBEB',
                        100: '#FEF3C7',
                        200: '#FDE68A',
                        300: '#FCD34D',
                        400: '#FBBF24',
                        500: '#F59E0B',
                        600: '#D97706',
                        700: '#B45309',
                        800: '#92400E',
                        900: '#78350F',
                        950: '#451A03'
                    }
                }
            },
            borderWidth: {
                '1': '1px'
            },
            keyframes: {
                'slide-from-left': {
                    '0%': {transform: 'translateX(100%)'},
                    '100%': {transform: 'translateX(0%)'},
                }
            },
            animation: {
                'slide-from-left-fast': 'slide-from-left 0.2s ease-in'
            }
        },
        screens: {
            '2xs': '384px',
            'xs': '512px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1458px',
            '3xl': '1536px',
        }
    },
    darkMode: 'selector'
}