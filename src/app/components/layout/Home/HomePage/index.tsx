import { Header } from "@/app/components/theme";

interface HomePageProps {
  title: string;
  children: React.ReactNode;
}

const HomePage = ({ title, children }: HomePageProps) => {
  return (
    <>
      <Header
        title={title}
        subtitle={`Livro Digital`}
        hasHomeLink={false}
        hasSearch={true}
        hasSummary={false}
      />
      <main className="mt-16 lg:mt-20">{children}</main>
    </>
  );
};

export { HomePage };
