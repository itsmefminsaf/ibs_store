const Loading = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center gap-3 bg-foreground text-background">
      <h1 className="text-xl animate-spin">|</h1>
      <h1>Loading...</h1>
    </div>
  );
};

export default Loading;
