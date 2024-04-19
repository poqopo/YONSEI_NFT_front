import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import './index.css';

export default function Gallery() {
  const [emblaRef] = useEmblaCarousel({ loop: true, inViewThreshold: 0.7 }, [
    Autoplay({ delay: 2000 }),
  ]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <img src="/ex1.webp" alt="loading..." />
        </div>
        <div className="embla__slide">
          <img src="/ex2.webp" alt="loading..." />
        </div>
        <div className="embla__slide">
          <img src="/ex3.webp" alt="loading..." />
        </div>
        <div className="embla__slide">
          <img src="/ex4.webp" alt="loading..." />
        </div>
      </div>
    </div>
  );
}
