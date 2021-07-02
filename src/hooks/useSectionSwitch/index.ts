import { RefObject, useState, useEffect } from 'react';

export default function useSectionSwitch(ref: RefObject<HTMLElement | null>) {
    const [isIntersecting, setIntersecting] = useState(false);
    const observer = new IntersectionObserver(([entry], observer) => {
        setIntersecting(entry.isIntersecting)
    },{rootMargin: `0px 0% -100% 0%`},
    
    );
    useEffect(() => {
        if (ref && ref.current) {
            observer.observe(ref.current);
            return () => {
                observer.disconnect();
            };
        }
    }, []);

    return isIntersecting;
}
