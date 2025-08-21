import {useEffect, useMemo, useState} from 'react'
import Lenis from '@studio-freight/lenis'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

export default function useLenis(options = {}) {
    const [lenis, setLenis] = useState<Lenis | null>(null)

    const defaultOptions = useMemo(() => {
        return {
            duration: 1.2,
            smooth: true,
            touchMultiplier: 2,
            ...options
        }
    }, [])

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const lenis = new Lenis(defaultOptions)
        setLenis(lenis)

        lenis.on('scroll', ScrollTrigger.update)

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000)
        })

        gsap.ticker.lagSmoothing(0)

        return () => {
            lenis.destroy()
            gsap.ticker.remove((time) => {
                lenis.raf(time * 1000)
            })
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [defaultOptions])

    return lenis
}