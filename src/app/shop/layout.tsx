import Category from "@/components/Category";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Category />
      {children}
    </>
  );
};

export default layout;
