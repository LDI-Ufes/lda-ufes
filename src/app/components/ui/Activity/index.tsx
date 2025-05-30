interface ActivityProps {
  children: React.ReactNode;
  title: string;
}

const Activity = ({ children, title }: ActivityProps) => {
  return (
    <section className="border-3 border-primary rounded-2xl mb-8">
      <div className="bg-primary text-white text-lg md:text-xl lg:text-3xl font-bold p-4 rounded-t-xl">
        {title}
      </div>
      <div className="p-4 rounded-b-xl">
        {children}
      </div>
    </section>
  );
};

export { Activity };