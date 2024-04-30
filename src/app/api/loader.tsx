'use client'
interface ImageLoaderInterface {
  src: string, width: number, quality: any,
}
export default function myImageLoader(props: ImageLoaderInterface) {
  return `https://mariemhachani.github.io/portfolio/${props.src}?w=${props.width}&q=${props.quality || 50}`
}

