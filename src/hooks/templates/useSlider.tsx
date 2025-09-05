"use client";

import gsap from "gsap";
import { useRef, useEffect } from "react";
import {Draggable} from "gsap/Draggable";
import {templates} from "@/data/templates";

export default function useSlider() {
  const carouselRef = useRef<HTMLDivElement | null>(null);
    const draggableRef = useRef<Draggable>(null);
    const timelineRef = useRef<gsap.core.Timeline>(null);

    useEffect(() => {
        if (!carouselRef.current) return;
        const track = carouselRef.current;
        const totalImages = templates.length
        const totalWidth = track.offsetWidth
        const imageWidth = totalWidth / (totalImages * 5)
        const numClones = 2;

        console.log("totalWidth: ", totalWidth)
        console.log("imageWidth: ", imageWidth)
        console.log("totalImages: ", totalImages)
        console.log("numClones: =", numClones)

        const sectionWidth = totalWidth / 5;
        const cloneWidth = numClones * totalImages * imageWidth;


        // Position track so original images are in the center
        const startX = -cloneWidth;
        gsap.set(track, { x: startX });

        timelineRef.current = gsap.timeline({
            repeat: -1,
        })
            .fromTo(carouselRef.current, {
                x: startX
            }, {
                x: startX - sectionWidth,
                duration: 20,
                ease: "none"
            })

        // Create draggable
        draggableRef.current = Draggable.create(track, {
            type: "x",
            bounds: {
                minX: -(cloneWidth * 2 + sectionWidth),
                maxX: 0
            },
            inertia: true,
            onDragStart: function() {
                timelineRef.current?.kill()
            },
            onDragEnd: function() {
                // checkBoundary(this.x);
            },
            onThrowUpdate: function() {

            },
            onThrowComplete: function() {
                checkBoundary(this.x);
            }
        })[0];

        return () => {
            if (draggableRef.current) {
                draggableRef.current.kill();
            }
        };
    }, [carouselRef.current]);

    function checkBoundary(currentX: number) {
        if (!carouselRef.current) return;
        const track = carouselRef.current;
        const totalImages = templates.length
        const totalWidth = track.offsetWidth
        const imageWidth = totalWidth / (totalImages * 5)
        const numClones = 2;

        console.log("currentx: ", currentX)

        const rangeSize = templates.length * imageWidth;
        const leftBoundary = -numClones * rangeSize;
        const rightBoundary = (-numClones * rangeSize) - rangeSize;
        const min = rightBoundary - 1
        console.log("left: ", leftBoundary)
        console.log("right: ", rightBoundary)
        console.log("min: ", min)

        const isScrollingRight = currentX < rightBoundary;

        // if (currentX < rightBoundary) {
        const newX = ((currentX - min) % rangeSize + rangeSize) % rangeSize + min
        console.log(newX)
        gsap.set(carouselRef.current, { x: newX });
        const sectionWidth = totalWidth / 5;

        gsap.delayedCall(0.1, () => {
            timelineRef.current = gsap.timeline({
                repeat: -1,
            })
                .fromTo(carouselRef.current, {
                    x: newX
                }, {
                    x: newX - (isScrollingRight ? sectionWidth : -sectionWidth),
                    duration: 20,
                    ease: "none"
                })
        })
        // }
        // else {
        //     gsap.set(trackRef.current, { x: currentX - (currentX - rightBoundary) });
        // }
    }

  return {
    refs: {
      carouselRef,
    },
    state: {

    },
    actions: {

    },
  };
}
