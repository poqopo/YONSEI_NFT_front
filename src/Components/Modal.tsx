export default function Modal({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="fixed top-[150px] right-1/2 translate-x-1/2 w-1/4 min-w-[500px] h-fit bg-[#FEE500] z-50">
      <div className="h-full text-[#191919]">{children}</div>
    </div>
  );
}
