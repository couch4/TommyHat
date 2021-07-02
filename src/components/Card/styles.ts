const wrapperVariants = {
    active: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring',
            damping: 10,
            stiffness: 25
        }
    },
    inactive: {
        opacity: 0,
        x: 2000,
    }
}

export const cardWrapper = (squish: boolean, offset?: boolean ) => ({
        variants: wrapperVariants,
        position: 'relative' as const,
        top: offset ? (squish ? '1.5rem' : '3rem') : 0,
        width: { base: '15rem', sm: '19rem', md: squish ? window.innerWidth*0.5 : window.innerHeight * 0.4 },
        flexDir: { md: squish ? 'row' : 'column' },
    }
)

export const cardImage = (src: string, squish: boolean) => ({
    src,
    spacing: 20,
    clipPath: "polygon(0% 5%, 100% 0%, 100% 95%, 0% 100%)",
    width: {md: squish ? '50%' : '100%'}
})

export const cardContent = (squish: boolean) => ({
    position: 'absolute' as const,
    top: {base: '93%', md: squish ? '1rem' : '93%'},
    alignItems: 'flex-start',
    padding: '0 1rem',
    left: {md: squish ? '50%' : 0}
})

export const cardHead = {
    textStyle: 'h4',
    color: 'brand.pale'
}

export const cardText = {
    textStyle: 'tinyCopy',
    padding: { base: 0, sm: '0.5rem 0' },
}


