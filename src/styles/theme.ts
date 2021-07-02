import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from "@chakra-ui/theme-tools"

// @ts-ignore
const breakpoints = createBreakpoints({ sm: '768px', md: '1200px', lg: '1500px' })

const heading = {
    textTransform: 'uppercase',
    fontWeight: 700,
    color: 'white',
    fontFamily: 'Antonio, sans-serif',
}

const h1 = {
    ...heading,
    fontSize: { base: '3rem', sm: '5xl' },
    lineHeight: { base: '3xl', sm: '5xl'},
}

const h2 = {
    ...heading,
    fontSize: { base: '2xl', sm: '3xl', md: '4xl'},
    lineHeight: { base: '2xl', sm: '3xl', md: '4xl'},
    letterSpacing: { base: '2px', sm: '3px', md: '5px'},
}

const h3 = {
    ...heading,
    fontSize: { base: '2xl',sm:'3xl',md:'3xl'},
    lineHeight: { base: 'xl', sm:'3xl',md: '3xl'},
    letterSpacing: { base: '2px',sm:'5px',md:'5px'},
}

const h4 = {
    ...heading,
    fontSize: { base: 'md',sm:'2xl',md:'2xl'},
    lineHeight: { base: 'lg',sm:'3xl',md:'3xl'},
}

const theme = {
    styles: {
        global: {
            '*': {
                userSelect: 'none',
                WebkitTapHighlightColor: 'transparent',
                WebkitOverflowScrolling: 'none',
                WebkitBackfaceVisibility: 'hiiden',
            },
            'html': {
                overflowY: 'scroll',
            },
            'html, body': {
                margin: 0,
                fontSize: '16px',
                color: 'brand.copy',
                overflowX: 'hidden',
                minHeight: '100vh',
                scrollBehavior: 'smooth',
                overscrollBehaviourY: 'none',
                backgroundColor: 'brand.darkNavy',
                textRendering: 'optimizeLegibility',
                WebkitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: 'grayscale',
            },
            'body': {
                position: 'relative'
            },
            '.quote-italic': {
                fontFamily: "Whitney SSm A, Whitney SSm B",
                fontStyle: 'italic',
                fontWeight: 600,
                fontSize: { base: '1.1rem',sm: 'xl', md:'xl'},
                lineHeight: { base: 'md', sm:'xl', md:'xl'}
            },
            '#root': {
                minHeight: '100vh',
            },
        },
    },
    breakpoints,
    sizes: {
        container: {
            sm: 'calc(100vw - 70px)',
            md: 'calc(100vw - 160px)',
            lg: 'calc(100vw - 300px)',
            xl: '1200px'
        },
    },
    colors: {
        brand: {
            blue: '#001731',
            lightBlue: '#3173B5',
            darkNavy: '#010C1B',
            midNavy: '#1A2E46',
            mint: '#15B3C1',
            lightNavy: '#425A76',
            red: '#DE173B',
            pale: '#EDF5FF',
            slate: '#1A2E46',
            greyBlue: '#A7B6C9',
        },
        gray: {
            50: '#F9F9F9',
            100: '#F7F7F7',
            200: '#F3F3F3',
            300: '#EEEEEE',
            400: '#D8D8D8',
            500: '#c1c1c1',
            600: '#a2a2a2',
            700: '#959595',
            800: '#848484',
            900: '#727272',
            1000: '#393e49',
        },
    },
    spacing: {
        xs: '1rem',
        sm: '2rem',
    },
    fontSizes: {
        xxs: '0.8rem',
        xs: '1rem',
        sm: '1.2rem',
        md: '1.375rem',
        lg: '1.5rem',
        xl: '1.6rem',
        '2xl': '2rem',
        '3xl': '3.9rem',
        '4xl': '4.5rem',
        '5xl': '5.8rem',
    },
    lineHeights: {
        xs: '1rem',
        sm: '1.2rem',
        md: '1.4rem',
        lg: '1.7rem',
        xl: '1.6rem',
        '2xl': '2rem',
        '3xl': '2.3rem',
        '4xl': '4rem',
        '5xl': '5.2rem',
    },
    textStyles: {
        h1,
        h1Pale: {
            ...h1,
            color: 'brand.pale',
        },
        h2,
        h2Pale: {
            ...h2,
            color: 'brand.pale',
        },
        h3,
        h3Pale: {
            ...h3,
            color: 'brand.pale',
        },
        h4,
        h4Pale: {
            ...h4,
            color: 'brand.pale',
        },
        button: {
            color: 'white',
            fontFamily: 'fonts.body',
            fontSize: { base: 'xxs', sm:'xxs', md:'xxs'},
            fontWeight: 700,
            letterSpacing: { base: 0,sm:0,md:'3px'},
            lineHeight: { base: 'xs',sm: 'sm', md:'sm'},
            textTransform: 'uppercase'
        },
        copy: {
            color: 'white',
            fontFamily: 'fonts.body',
            fontSize: { base: 'xs',sm: 'md', md:'lg'},
            lineHeight: { base: 'md',sm:'lg',md:'3xl'}
        },
        hotspot: {
            color: 'white',
            fontFamily: 'fonts.heading',
            textTransform: 'uppercase',
            fontWeight: 700,
            letterSpacing: '2px',
            fontSize: { base: 'xxs', sm:'xxs'},
            lineHeight: { base: 'xs',sm: 'sm'},
        },
        light: {
            color: 'white',
            fontFamily: 'WhitneyLight',
            fontSize: { base: '1.3rem', sm:'lg', md:'2xl'},
            lineHeight: { base: 'md',sm:'2xl',md:'2xl'}
        },
        tinyCopy: {
            color: 'brand.greyBlue',
            fontFamily: 'fonts.body',
            fontSize: { base: 'xs', sm:'sm',},
            lineHeight: { base: 'md', sm:'lg',},
           
        },
        subHead: {
            color: 'white',
            fontSize: { base: 'xs',sm:'md'},
            fontWeight: 600,
            fontFamily: 'fonts.body',
            letterSpacing: '10px'
        },
         subHeadCaps: {
            color: 'brand.greyBlue',
            margin: { base: '0.9rem 0',sm:'2rem 0',md:'2rem 0'},
            fontSize: { base: '0.9rem',sm:'md',md:'md'},
            fontWeight: 600,
            textTransform: 'uppercase',
             fontFamily: 'fonts.body',
            lineHeight: { base: '1.3rem',sm:'2rem'},
            letterSpacing: { base: '1px',sm:'5px',md:'10px'}
        },
        keyArea: {
             ...h4,
            fontSize: { base: 'md', sm:'xl', md:'2xl'},
            letterSpacing: '2px'
        },
        panel: {
            color: 'white',
            fontFamily: 'fonts.body',
            textTransform: 'none',
            fontWeight: 300,
            letterSpacing: '0',
            whiteSpace: 'nowrap',
            textAlign: 'left',
            fontSize: { base: 'xxs', sm:'sm',},
            lineHeight: { base: 'xs', sm:'sm',},
        },
        tag: {
            color: 'white',
            fontSize: { base: 'xxs',sm:'xs'},
            fontWeight: 700,
            fontFamily: 'fonts.body',
            textTransform: 'uppercase',
            lineHeight: '17px',
            letterSpacing: { base: '2px',sm:'5px'}
        },
    },
    fonts: {
        heading: 'Antonio, sans-serif',
        body: 'Whitney, sans-serif',
    },
};

const customTheme = extendTheme(theme);

export default customTheme;
