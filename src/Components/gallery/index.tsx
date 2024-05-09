import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import './index.css';
import { useCallback } from 'react';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import { NFTDetail } from '@/utils/type';

interface GalleryProps {
  nfts: NFTDetail[];
}

export default function Gallery({ nfts }: GalleryProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, inViewThreshold: 0.7 },
    [],
  );

  const toImgSrc = (src: string) => {
    const temp = src.replace('json', 'img');
    return temp.replace('json', 'png');
  };
  const descriptionSplit = (description: string) => {
    const desList = description.split(/\n/g);
    return desList;
  };

  return (
    <div id="nftcapture" className="embla" ref={emblaRef}>
      <div className="embla__container">
        {nfts.map((nft, idx) => {
          descriptionSplit(nft.description);
          return (
            <div className="embla__slide">
              <img
                className="w-4/5 p-2 bg-[#FCFCF4] rounded-[3px] mx-auto"
                src={toImgSrc(nft.tokenURI)}
                alt="loading..."
              />
              <h2 className="my-4 text-center font-bold text-[20px]">
                {nft.nftName}
              </h2>
              {descriptionSplit(nft.description).map((line, index) => (
                <p className="px-4">{line}</p>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
