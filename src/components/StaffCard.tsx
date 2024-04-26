type StaffCardProps = {
  name: string;
  summary: React.ReactNode | String;
  image: string;
};

export default function StaffCard({ name, summary, image }: StaffCardProps) {
  return (
    <div className="flex items-center justify-center lg:justify-normal bg-white rounded-2xl">
      <div className="p-6">
        <div className="flex flex-col lg:flex-row text-center lg:text-left ">
          <div className="flex-shrink-0 mb-4 lg:mb-0">
            <img className="w-44 h-auto max-w-full mx-auto rounded-xl" src={image}></img>
          </div>
          <div className="flex-grow overflow-auto lg:ms-4">
            <h5 className="mb-1 text-xl font-medium">{name}</h5>
            <br />
            <p className="mb-0">{summary}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
