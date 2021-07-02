import { RefObject, useEffect, useState } from 'react';

export default function usePosition(ref: RefObject<HTMLElement | null>, scrollY: number) {
    const [position, setPosition] = useState({top: 0, height: 0, bottom: window.innerHeight})
  
    useEffect(() => {
        if (ref && ref.current) {
            const dimensions = ref.current.getBoundingClientRect()
            setPosition({top:scrollY+dimensions.top, height: dimensions.height, bottom: scrollY+dimensions.top + dimensions.height})
        }
    }, [scrollY,ref]);

    return position;
}
