import { useState, useEffect, useRef } from 'react';

export default function useComponentVisible(initialIsVisible) {
    const [isVisible, setIsVisible] = useState(initialIsVisible);
    const ref = useRef(null);

    const handleClickedOutside = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            setIsVisible(false);
        }
    }
    useEffect(() => {
        document.addEventListener("mousedown", handleClickedOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickedOutside);
        }
    })

    return { ref, isVisible, setIsVisible };
}