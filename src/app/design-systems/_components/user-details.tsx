export type UserDetailPorps = {
  name: string;
  date?: string;
  designation: string;
  imageSrc: string;
};

export default function UserDetails({
  name,
  date,
  designation,
  imageSrc,
}: UserDetailPorps) {
  return (
    <div className="space-x-300 flex flex-row items-center justify-start">
      <div className="rounded-full shadow-md">
        <img
          src={imageSrc}
          alt="logo"
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
      <div>
        <p className="body-strong">{name}</p>
        <p className="body-base">{designation}</p>
      </div>
    </div>
  );
}
