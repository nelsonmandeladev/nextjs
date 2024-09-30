import { cn } from '@/lib/utils';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import * as iconsLinks from './icons';
import * as imagesLinks from './images';
import { SvgAsset } from '@/components/common/';

type IImageType = {
  h?: number | string;
  w?: number | string;
  className?: string;
  imgClassName?: string;
  cover?: boolean;
  alt: string;
};

type IAssetKey = keyof typeof imagesLinks | keyof typeof iconsLinks;

type ISvgProps = {
  className?: string;
  color?: string;
  size?: number;
  h?: number;
  w?: number;
};

export const ASSETS = (() => {
  const images = {} as Record<
    IAssetKey,
    {
      image: (_: IImageType) => React.ReactNode;
      link: StaticImport;
      src: string;
      svg: (_props: ISvgProps) => React.ReactNode;
    }
  >;

  const imagesData = {
    ...imagesLinks,
    ...iconsLinks,
  };

  Object.keys(imagesData).forEach((key) => {
    images[key as IAssetKey] = {
      link: imagesData[key as keyof typeof imagesData].default,
      src: imagesData[key as keyof typeof imagesData].default.src,
      svg: ({ className, color, size, h, w }: ISvgProps) => (
        <SvgAsset
          icon={imagesData[key as keyof typeof imagesData].default.src}
          className={cn(className)}
          color={color}
          size={size}
          height={h}
          width={w}
        />
      ),
      image: ({
        h: height,
        w: width,
        className,
        imgClassName,
        cover,
        alt,
      }: IImageType) => (
        <div className={cn('relative', className)} style={{ width, height }}>
          <Image
            className={cn(
              cover ? 'object-cover' : 'object-contain',
              imgClassName,
            )}
            fill
            sizes="all"
            src={imagesData[key as IAssetKey].default}
            alt={alt}
            priority
          />
        </div>
      ),
    };
  });

  return images;
})();
