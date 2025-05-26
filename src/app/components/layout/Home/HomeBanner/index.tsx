import { Button } from "@/app/components/ui/Button";
import { Container } from "@/app/components/ui/Container";
import { Pagination } from "@/app/router/routes";
import { MdPlayArrow } from "react-icons/md";
import { Link } from "react-router-dom";

interface HomeBannerProps {
  title: string;
  year: string;
  cover: string;
  authors: { name: string }[];
}

export const HomeBanner = ({
  title,
  year,
  authors,
  cover,
}: HomeBannerProps) => {
  return (
    <section className="relative lg:min-h-[80dvh]">
      {cover ? (
        <img
          src={`/covers/${cover}`}
          alt="Banner"
          className="top-0 left-0 z-0 h-32 w-full object-cover sm:h-48 md:h-60 lg:absolute lg:h-full"
        />
      ) : (
        <div className="from-primary to-primary/50 top-0 left-0 z-0 h-32 w-full bg-gradient-to-b object-cover sm:h-48 md:h-60 lg:absolute lg:h-full"></div>
      )}
      <Container>
        <header className="bg-theme-background relative z-1 ml-auto flex flex-col justify-center gap-4 py-4 lg:min-h-[80dvh] lg:max-w-[576px] lg:gap-8 lg:px-20 xl:mr-32">
          <div className="flex flex-col gap-1">
            <span className="text-primary text-sm uppercase">
              Livro Digital • {year}
            </span>
            <h1 className="text-primary mt-2 text-2xl leading-[1.1] font-bold md:text-3xl lg:mt-5 lg:text-4xl xl:text-5xl">
              {title}
            </h1>
            <div className="mt-2 flex flex-col gap-1">
              {authors.map((author) => (
                <p
                  key={author.name}
                  className="text-theme text-xs font-bold md:text-sm lg:text-base"
                >
                  {author.name}
                </p>
              ))}
            </div>
          </div>
          <p className="text-theme text-sm md:text-base">
            Essa página é um livro digital publicado pela uperintendência de
            Educação à Distância, com conteúdo produzido e revisado pelos
            professores associados à Universidade Federal do Espírito Santo.
            <br />
            <br />
            Aproveite!
          </p>
          <Button variant="secondary" asChild>
            <Link to={Pagination[0].page}>
              <MdPlayArrow className="size-6" /> Iniciar leitura
            </Link>
          </Button>
        </header>
      </Container>
    </section>
  );
};
