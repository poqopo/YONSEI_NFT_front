import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { NFTDetail } from '@/utils/type';
import './index.css';

interface GalleryProps {
  nfts: NFTDetail[];
}

export default function Gallery({ nfts }: GalleryProps) {
  const [emblaRef] = useEmblaCarousel({ loop: true, inViewThreshold: 0.7 }, [
    Autoplay({ delay: 2000 }),
  ]);

  const toImgSrc = (src: string) => {
    const temp = src.replace('json', 'img');
    return temp.replace('json', 'png');
  };
  const descriptionSplit = (description: string) => {
    const desList = description.split(/\\n/g);
    return desList;
  };

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {nfts.map((nft, idx) => {
          descriptionSplit(nft.description);
          return (
            <div className="embla__slide">
              <img
                className="w-[300px]"
                src={toImgSrc(nft.tokenURI)}
                alt={`Slide ${idx + 1}`}
              />
              <h2 className="my-4 text-center font-bold text-[20px]">
                {nft.nftName}
              </h2>
              {descriptionSplit(nft.description).map((line, index) => (
                <p>{line}</p>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
