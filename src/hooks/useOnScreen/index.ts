import { RefObject, useState, useEffect } from 'react';

export default function useOnScreen(ref: RefObject<HTMLElement | null>) {
    const [isIntersecting, setIntersecting] = useState(false);
    const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting || entry.boundingClientRect.top < 0));
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
