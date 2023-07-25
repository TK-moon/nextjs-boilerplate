import { ImageProps } from 'next/image';

interface Props extends ImageProps {
  src: string;
}

const mockNextImage: React.FC<Props> = (props) => {
  const { src: _src, alt } = props;
  const src = _src as string;

  return <img src={src} alt={alt} />;
};

export default mockNextImage;
