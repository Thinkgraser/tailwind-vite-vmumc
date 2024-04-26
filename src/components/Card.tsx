import { Button } from "../components";

type CardProps = {
  title: string;
  buttonLink?: string;
  btnText?: "Learn More" | "View" | string;
} & ({ image: string; alt: string } | { image?: never; alt?: never });

export default function Card({ title, buttonLink, image, alt, btnText = "Learn More" }: CardProps) {
  return (
    <>
      <div className="h-full bg-gray-800 text-white relative flex flex-col min-w-0 bg-clip-border border-black/[.175] border rounded-md ">
        {image && (
          <img className="w-full align-middle rounded-t-[5px]" src={`${image}`} alt={`${alt}`} />
        )}
        <div className=" flex flex-col justify-between flex-auto p-4">
          <p>{title}</p>
          {buttonLink && (
            <div className="flex items-center justify-between mt-4">
              <div className="relative inline-flex align-middle mt-auto">
                <Button variant="outline-gray" href={`${buttonLink}`}>
                  {btnText}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
