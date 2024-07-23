export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-[80%] flex justify-center mx-auto bg-red-900">
      {children}
    </div>
  );
}
