import RootLayout from "@/layouts/RootLayout";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return <RootLayout>{children}</RootLayout>;
};

export default layout;
