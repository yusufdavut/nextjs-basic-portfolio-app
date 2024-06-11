export default function PageTitle({ title }: any) {
  return (
    <h1 className="mb-14 font-bold text-5xl relative after:content-[''] after:w-[150px] after:h-1 after:bg-primary after:absolute after:left-0 after:-bottom-[15px]">
      {title}
    </h1>
  );
}
