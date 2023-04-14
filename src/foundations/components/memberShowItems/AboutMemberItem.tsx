interface AboutMemberItemProps {
  title: string;
  value: string;
}

export const AboutItem = ({ title, value }: AboutMemberItemProps) => {
  return (
    <div key={title + value} className="grid grid-cols-2">
      <div className="px-4 py-2 font-semibold">{title}</div>
      <div className="px-4 py-2">{value}</div>
    </div>
  );
};
