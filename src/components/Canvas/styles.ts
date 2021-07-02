


export const loaderWrapper = {
    bg: "brand.navyDark",
    height: '100vh',
    alignItems: 'flex-start',
    transition: '0.3s ease-out',
    overflow: 'hidden',
    width: '100%',
    position: 'absolute' as const,
    top: 0,
    zIndex: 0
}

const holderVariants = {
    active: {
        y: 0,
        opacity: 1,
        transition: {
            delay: 1,
            type: 'spring',
            damping: 50,
            stiffness: 70
        }
    },
    inactive: {
        y: 20,
        opacity: 0
    }
}

export const loaderHolder = (active: boolean) => ({
    width: '100%',
    height: '100%',
    initial: "inactive",
    animate: active ? 'active' : 'inactive',
    variants: holderVariants
})

export const logoHolder = {
    position: 'absolute' as const,
    mt: '4rem'
}

export const heading = (textStyle: string) => ({
    textStyle,
    mb: '1rem'
})

export const contentWrapper = {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    minH: '750px'
}

