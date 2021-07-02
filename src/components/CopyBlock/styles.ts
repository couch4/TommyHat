

const wrapperVariants = {
    active: {
        opacity: 1,
        transition: {
            staggerChildren: 2 * 0.2,
            delay: 2,
        }
    },
    inactive: {
        opacity: 1,
    }
}

export const copyWrapper = (active: boolean) => ({
    initial: 'inactive',
    animate: active ? 'active' : 'inactive',
    variants: wrapperVariants,
    marginBottom: {base: '1rem', sm: '5rem'},
    width: {base: '100%', sm: '100%',md:  'initial'},
})

const textVariants = {
    active: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'tween',
            ease: 'easeOut',
            duration: 0.5,
        }
    },
    inactive: {
        y: 50,
        opacity: 0,
    }
}

export const copyHead = (invert: boolean | undefined) => ({
    textStyle: 'h3',
    variants: textVariants,
    color: invert ? "brand.blue" : "white"
})


export const copySub = (invert: boolean | undefined) => ({
    textStyle: 'subHeadCaps',
    variants: textVariants,
    maxWidth: '50rem',
    color: invert ? "brand.lightNavy" : "brand.greyBlue"
})

const fadeVariants = {
    active: {
        opacity: 1,
        transition: {
            duration: 2,
            delay: 1,
        }
    },
    inactive: {
        opacity: 0,
    }
}

export const copyText = (invert?: boolean , offset?: boolean, copyWidth?: number) => ({
    textStyle: 'copy',
    variants: fadeVariants,
    width: {base: '100%' ,sm: '100%', md:copyWidth ? `${copyWidth}px` : '35rem'},
    marginLeft: {base: 0,sm: 0,md: offset ? '12rem' : 0},
    color: invert ? "brand.midNavy" : "white",
})

const underlineVariants = {
    active: {
        scaleX: 1,
        transition: {
            type: 'spring',
            damping: 100,
            delay: 1.5,
        }
    },
    inactive: {
        scaleX: 0
    }
}

export const copyUnderline = (invert: boolean | undefined, offset: boolean | undefined) => ({
    variants: underlineVariants,
    width: {base: 305,sm: 350,md:370},
    height: '1px',
    bg: 'brand.greyBlue',
    m: {base: '1.7rem 0',sm: '1.5rem 0', md:'2.5rem 0'},
    marginLeft: {base: 0, sm: 0, md: offset ? '12rem' : 0},
    transformOrigin: '0 0'
})