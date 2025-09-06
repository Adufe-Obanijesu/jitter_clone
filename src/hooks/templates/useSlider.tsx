"use client";

import gsap from "gsap";
import {useRef, useCallback, useMemo, useState} from "react";
import {Draggable} from "gsap/Draggable";
import {templates} from "@/data/templates";
import {useGSAP} from "@gsap/react";

export default function useSlider() {
  const carouselRef = useRef<HTMLDivElement | null>(null);
    const draggableRef = useRef<Draggable>(null);
    const timelineRef = useRef<gsap.core.Timeline>(null);
    const currentPos = useRef(0)
    const [isPlaying, setIsPlaying] = useState(false)


    const numClones = 1
    const occurrences = useMemo(() => numClones * 2 + 1, [])
    const totalImages = useMemo(() => templates.length, [])

    const getTrackDimensions = useCallback(() => {
        if (!carouselRef.current) return null;
        const track = carouselRef.current;
        const totalWidth = track.offsetWidth;
        const imageWidth = totalWidth / (totalImages * occurrences);
        const rangeSize = totalImages * imageWidth;
        const sectionWidth = totalWidth / occurrences;

        return {
            track,
            totalWidth,
            imageWidth,
            rangeSize,
            sectionWidth
        };
    }, [totalImages, occurrences]);

    const checkBoundary = useCallback((currentX: number) => {
        const dimensions = getTrackDimensions();
        if (!dimensions || !carouselRef.current) return;

        const { rangeSize, sectionWidth } = dimensions;
        const rightBoundary = (-numClones * rangeSize) - rangeSize;
        const min = rightBoundary - 1;

        const isScrollingRight = currentX < currentPos.current;

        const newX = ((currentX - min) % rangeSize + rangeSize) % rangeSize + min;
        gsap.set(carouselRef.current, { x: newX });

        gsap.delayedCall(0.1, () => {
            timelineRef.current = gsap.timeline({
                repeat: -1,
                scrollTrigger: {
                    trigger: ".templates-cards",
                    start: "top bottom",
                    end: "bottom top",
                    toggleActions: "play pause play pause",
                },
            })
                .fromTo(carouselRef.current, {
                    x: newX
                }, {
                    x: newX - (isScrollingRight ? sectionWidth : -sectionWidth),
                    duration: 60,
                    ease: "none"
                })

                setIsPlaying(true)
        })
    }, [getTrackDimensions])

    useGSAP(() => {
        const dimensions = getTrackDimensions();
        if (!dimensions) return;

        const mm = gsap.matchMedia()

        mm.add({
            isDesktop: "(min-width: 1024px)",
            isMobile: "(max-width: 1023px)",
        }, ctx => {
            const { isDesktop } = ctx.conditions as {
                isDesktop: boolean;
                isMobile: boolean;
            }

            const { track, sectionWidth, rangeSize, totalWidth } = dimensions;
            const cloneWidth = numClones * rangeSize;

            const startX = isDesktop ? -cloneWidth : 0;
            gsap.set(track, { x: startX });
            currentPos.current = startX;

            if (isDesktop) {

                    timelineRef.current = gsap.timeline({
                        repeat: -1,
                        scrollTrigger: {
                            trigger: ".templates-cards",
                            start: "top bottom",
                            end: "bottom top",
                            toggleActions: "play pause play pause",
                        },
                    }).fromTo(track, {
                        x: startX
                    }, {
                        x: startX - sectionWidth,
                        duration: 20,
                        ease: "none"
                    });

                    setIsPlaying(true)
                }

            const minX = isDesktop ? -(cloneWidth * 2 + sectionWidth) : -(totalWidth - (totalWidth - 10) / 14) + 30;

            draggableRef.current = Draggable.create(track, {
                type: "x",
                bounds: {
                    minX,
                    maxX: 0
                },
                inertia: true,
                dragClickables: true,
                onDragStart: function() {
                    if (isDesktop) {
                        timelineRef.current?.kill();
                        setIsPlaying(false)
                        draggableRef.current?.update()
                        currentPos.current = this.x;
                    }
                },
                onThrowComplete: function() {
                    if (isDesktop) {
                     checkBoundary(this.x);
                    }
                }
            })[0];

            return () => {
                if (draggableRef.current) {
                    draggableRef.current.kill();
                }
                if (timelineRef.current) {
                    timelineRef.current.kill();
                }
            };
        })

        return () => {
            mm.revert()
        }

    }, [getTrackDimensions, checkBoundary]);

    const toggleAutoScroll = useCallback(() => {
        if (!timelineRef.current) return;

        if (timelineRef.current.paused()) {
            timelineRef.current.play();
            setIsPlaying(true);
        } else {
            timelineRef.current.pause();
            setIsPlaying(false);
        }
    }, []);

    return {
        refs: {
            carouselRef,
        },
        state: {
            occurrences,
            isPlaying,
        },
        actions: {
            toggleAutoScroll
        },
    };
}
