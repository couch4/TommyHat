import { MotionValue } from "framer-motion"

export const menuContainer = {
    maxW: {base: 'container.sm', sm: 'container.md', md: 'container.lg', lg: 'container.xl'},
    left: '50%',
    transform:'translateX(-50%)',
    height: '100%',
    d: 'flex',
    flexDir: 'column' as const,
    position: 'fixed' as const,
    zIndex: 100,
    pointerEvents: 'none' as const,
}

const menuVariants = {
    active: {
        opacity: 1,
        transition: {
            damping: 10, mass: 0.27, stiffness: 80,
            staggerChildren: 0.5 * 0.2
        }
    },
    inactive: {
        opacity: 1,
    }
}


export const menuWrapper = (mainMenu: boolean, active: boolean, top: MotionValue, paddingTop: MotionValue, invert?: boolean) => ({
    style:{paddingTop},
    initial: 'inactive',
    animate: active ? 'active' : 'inactive',
    variants: menuVariants,
    pointerEvents: 'auto',
    zIndex: 50,
    position: 'absolute',
    right: 0,
    d: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    color: invert? 'brand.blue' : 'white'
})

const menuItemVariants = (index: number, itemHeight: number, isCurrent: boolean, isLanding: boolean, expanded: boolean) => ({
    init: {
        opacity: 0,
        x: -20,
    },
    active: {
        opacity: 1,
        x: 0,
        y: isCurrent && !expanded ? -index * itemHeight : 0,
        transition: {
            x: {
                delay: index * 0.2,
                duration: 0.5,
            },
            opacity: {
                delay: isLanding ? index * 0.2 : 0,
                duration: isLanding ? 0.5 : 0.2,
            },
            y: {
                duration: isLanding ? 0.5 : 0.2
            }
            
        },
        
    },
    inactive: {
        opacity: 0,
        x: 0,
        y: -index * itemHeight,
        transition: {
            y: {
                duration: 0.5
            }
            
        },

    }
})

export const menuItem = (expanded: boolean, onClick: () => void, itemHeight: number, index: number, currentIndex: number, invert?:boolean) => {
    
    const isCurrent = currentIndex === index
    const isLanding = currentIndex === -1
    const isActive = isCurrent || isLanding || expanded    
    
    return {
        initial: 'init',
        animate: isActive ? 'active' : 'inactive',
        variants: menuItemVariants(index, itemHeight+10, isCurrent, isLanding, expanded),
        fontSize: "xs",
        marginBottom: '10px',
        position: 'relative' as const,
        textTransform: 'uppercase',
        color: invert && !isLanding  ? (expanded ? 'white' : 'brand.blue') : 'white',
        transition: "0.3s color",
        fontWeight: 600,
        letterSpacing: 4,
        paddingRight: '15px',
        cursor: 'pointer',
        whileHover: 'hover',
        pointerEvents: expanded ? 'auto' : 'none',
        onClick,
        _after: {
            content: '""',
            bg: 'brand.greyBlue',
            width: "4px",
            height: "4px",
            borderRadius: "2px",
            marginTop: "-2px",
            position: 'absolute' as const,
            top: '1.05rem',
            right: 0,
        }
    }
}

const underlineVariants = {
    hover: {
        width: '100%',
        transition: {
            duration: 0.3
        }
    },
    init: {
        width: 0,
        transition: {
            duration: 0.02,
            type:'tween'
        }
    },
}

export const menuUnderline = {
    variants: underlineVariants,
    height: '1px',
    bg: 'white',
    margin: '-0.5rem 0',
    position: 'absolute' as const,
    right: 0,
}

const overlayVariants = {
    active: {
        opacity: 0.8,
    },
    inactive: {
        opacity: 0,
    }
}

export const overlay = (active: boolean) => ({
    initial: 'inactive',
    variants: overlayVariants,
    animate: active ? 'active' : 'inactive',
    bg: "brand.darkNavy",
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    pointerEvents: 'none',
    zIndex: 10
})