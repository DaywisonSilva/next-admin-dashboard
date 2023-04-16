// TODO: added motion here

export const PageView = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="container flex mx-auto h-screen  bg-background">
      {children}
    </main>
  );
};
