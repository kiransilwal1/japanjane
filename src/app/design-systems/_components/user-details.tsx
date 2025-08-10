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
      <div className="rounded-full shadow-md overflow-hidden w-10 h-10">
        <img
          src={imageSrc}
          alt="avatar"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <div>
        <p className="body-strong">{name}</p>
        <p className="body-base">{designation}</p>
      </div>
    </div>
  );
}
