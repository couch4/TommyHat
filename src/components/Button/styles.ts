export const button = {
    d: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textStyle: 'button',
    role: 'button',
    cursor: 'pointer',
    padding: ['1rem 3rem','1rem 3rem','1.2rem 3rem'],
    bg: 'brand.mint',
    fontWeight: 800,
    height: '4rem',
    borderRadius: '2rem',
    textTransform: 'uppercase' as const,
    transition: '0.3s background',
    width: ['100%','initial'],
    _hover: {
        bg: 'brand.midNavy',
        transition: '0.3s background, 0.3s border',
    }

}


