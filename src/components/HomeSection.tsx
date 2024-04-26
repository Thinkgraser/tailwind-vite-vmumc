type HomeSectionProps = {
  text: React.ReactNode;
  image: string;
  alt: string;
  imageAlignment?: "left" | "center" | "right";
  sectionWidth?: string;
  imageSide?: "left" | "right";
  imageSectionWidth?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12";
  textSectionWidth?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12";
  imageLink?: string;
  textUnderImage?: React.ReactNode;
} & (
  | { imageSmallWidth?: string; imageLargeWidth?: string; imageWidth?: never }
  | { imageSmallWidth?: never; imageLargeWidth?: never; imageWidth?: string }
);

export default function HomeSection({
  text,
  image,
  alt,
  imageAlignment = "center",
  imageWidth,
  imageSmallWidth = imageWidth || "3/12",
  imageLargeWidth = imageWidth || "6/12",
  sectionWidth = "full",
  imageSide = "right",
  imageSectionWidth = "6",
  textSectionWidth = "6",
  imageLink,
  textUnderImage,
}: HomeSectionProps) {
  return (
    <>
      <div className={`lg:grid lg:grid-cols-12 lg:w-${sectionWidth} space-y-4 lg:space-y-0`}>
        {imageSide == "right" && (
          <div className={`self-center col-span-${textSectionWidth}`}>{text}</div>
        )}
        <div
          className={`text-center lg:text-${imageAlignment} self-center col-span-${imageSectionWidth}`}>
          <a
            className={`w-${imageSmallWidth} lg:w-${imageLargeWidth} block mx-auto`}
            href={imageLink}>
            <img className="rounded w-full" src={image} alt={alt} />
          </a>
          {textUnderImage}
        </div>
        {imageSide == "left" && (
          <div className={`self-center col-span-${textSectionWidth}`}>{text}</div>
        )}
      </div>
    </>
  );
}
