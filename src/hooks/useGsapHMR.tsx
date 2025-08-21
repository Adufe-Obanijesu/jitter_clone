import {DependencyList, RefObject, useEffect, useRef, useState} from "react";
import {useGSAP} from "@gsap/react";

export default function useGsapHMR(
    callback: () => (() => void) | void,
    params: {
        scope?: RefObject<HTMLElement | null>,
        dependencies: DependencyList
    } = { dependencies: [] }
) {
    const [hmrCounter, setHmrCounter] = useState(0);
    const callbackSourceRef = useRef<string>(null);
    const cleanupRef = useRef<(() => void) | null>(null);

    useEffect(() => {
        const source = callback.toString();

        if (callbackSourceRef.current !== source) {
            callbackSourceRef.current = source;

            if (cleanupRef.current) {
                cleanupRef.current();
                cleanupRef.current = null;
            }

            setHmrCounter(c => c + 1);
        }
    }, [callback]);

    useGSAP(() => {
        if (cleanupRef.current) {
            cleanupRef.current();
        }

        const cleanup = callback();
        cleanupRef.current = cleanup || null;
    }, {scope: params.scope, dependencies: [...params.dependencies, hmrCounter]});

    useEffect(() => {
        return () => {
            if (cleanupRef.current) {
                cleanupRef.current();
            }
        };
    }, []);
}

