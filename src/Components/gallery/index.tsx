import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import './index.css';

export default function Gallery() {
  const [emblaRef] = useEmblaCarousel({ loop: true, inViewThreshold: 0.7 }, [
    Autoplay({ delay: 2000 }),
  ]);
  const imgSrcList = ['/sample/1.png', '/sample/2.png'];
  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {imgSrcList.map((src, idx) => {
          return (
            <div className="embla__slide">
              <img src={src} alt={`Slide ${idx + 1}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
