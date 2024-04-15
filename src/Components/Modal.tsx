export default function Modal({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="p-10 fixed top-1/4 margin: 0 auto z-50 justify-center items-center w-fit max-w-[500px] h-fit bg-[#FFC939]">
      {children}
    </div>
  );
}
