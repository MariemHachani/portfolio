'use client'
interface ImageLoaderInterface {
  src: string, width: number, quality: any,
}
export default function myImageLoader(props: ImageLoaderInterface) {
  return `./${props.src}?w=${props.width}&q=${props.quality || 75}`
}