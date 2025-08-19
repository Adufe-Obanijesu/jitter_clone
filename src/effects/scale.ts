import gsap from 'gsap';

interface IConfig {
    scale?: number;
  direction?: 'down' | 'up';
}

gsap.registerEffect({
  name: 'scaleEffect',
  effect: (targets: gsap.TweenTarget, config: IConfig) => {
    const scaleValue = config.scale !== undefined ? config.scale : (config.direction === 'down' ? 0.9 : 1.1);
    return gsap.fromTo(targets, {scale: 1}, { scale: scaleValue, ease: "back.out(2.5)", ...config });
  },
  defaults: {
    scale: 0.95,
    direction: 'down',
  },
  extendTimeline: true,
});

export {}