import theme from '../../styles/theme'

export default function useBreakpoint() {
    let mode = 'mobile'

    const width = window.innerWidth

    if (width >= parseInt(theme.breakpoints.sm)) {
        mode = 'tablet'
    }

    if (width >= parseInt(theme.breakpoints.md)) {
        mode = 'desktop'
    }

    return mode;
}
