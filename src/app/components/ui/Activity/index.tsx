interface ActivityProps {
  children: React.ReactNode;
  title: string;
}

const Activity = ({ children, title }: ActivityProps) => {
  return (
    <section className="border-primary mb-8 rounded-2xl border-3">
      <div className="bg-primary rounded-t-xl p-4 text-base font-bold text-white md:text-lg lg:text-xl">
        {title}
      </div>
      <div className="rounded-b-xl p-4">{children}</div>
    </section>
  );
};

export { Activity };
