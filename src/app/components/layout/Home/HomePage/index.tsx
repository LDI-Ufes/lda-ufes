import { Footer, Header } from "@/app/components/theme";
import { ButtonToTop } from "@/app/components/theme/ButtonToTop";

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
        hasProgress={false}
      />
      <main className="mt-16 lg:mt-20">{children}</main>
      <Footer />
      <ButtonToTop />
    </>
  );
};

export { HomePage };
