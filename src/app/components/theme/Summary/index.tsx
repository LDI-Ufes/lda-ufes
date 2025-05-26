import { Button } from "@/app/components/ui/Button";
import { ContainerInner } from "@/app/components/ui/Container";
import { Pagination } from "@/app/router/routes";
import { MdOutlineCloseFullscreen, MdOutlineOpenInFull } from "react-icons/md";

import { Link } from "react-router-dom";
import { useState } from "react";
import { SummarySearch } from "./SummarySearch";

const Summary = () => {
  const [expandedChapters, setExpandedChapters] = useState<string[]>([]);
  const [allExpanded, setAllExpanded] = useState(false);

  const toggleChapter = (title: string) => {
    setExpandedChapters((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title],
    );
  };

  const toggleAllChapters = () => {
    if (allExpanded) {
      setExpandedChapters([]);
    } else {
      const chapterTitles = Pagination.filter(
        (p) => p.subchapters && p.subchapters.length > 0,
      ).map((p) => p.title);
      setExpandedChapters(chapterTitles);
    }
    setAllExpanded(!allExpanded);
  };

  return (
    <aside className="sticky top-40 hidden max-w-[25rem] flex-col gap-8 self-start lg:flex">
      <SummarySearch />
      <ContainerInner className="flex flex-col gap-4 self-start rounded-2xl border-2 border-slate-300 px-5 py-4 md:px-8 md:py-6 lg:max-h-[580px]">
        <header className="flex w-full items-center justify-between gap-4">
          <h2 className="text-primary text-2xl font-bold uppercase">Sumário</h2>
          <Button variant="secondary" onClick={toggleAllChapters}>
            {allExpanded ? (
              <MdOutlineCloseFullscreen className="size-6" />
            ) : (
              <MdOutlineOpenInFull className="size-6" />
            )}
            <span className="hidden text-sm lg:block">
              {allExpanded ? "Recolher sumário" : "Expandir sumário"}
            </span>
          </Button>
        </header>
        <div className="flex flex-col">
          {Pagination.map((page) => {
            const chapterNumber =
              Pagination.filter((p) => p.template === "chapter").indexOf(page) +
              1;

            const isExpanded = expandedChapters.includes(page.title);

            return (
              <div
                key={page.title}
                className="flex flex-col border-b-2 border-slate-300 pt-2 pb-3 last:border-b-0 lg:pt-3 lg:pb-5"
              >
                <div
                  className="flex cursor-pointer items-center gap-3"
                  onClick={() =>
                    page.subchapters &&
                    page.subchapters.length > 0 &&
                    toggleChapter(page.title)
                  }
                >
                  {page.template === "chapter" && (
                    <span className="text-primary text-2xl lg:text-3xl">
                      {chapterNumber.toString().padStart(2, "0")}
                    </span>
                  )}
                  <Link
                    to={page.page}
                    className="flex-grow text-base font-bold hover:underline lg:text-lg"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {page.title}
                  </Link>
                </div>
                {isExpanded &&
                  page.subchapters &&
                  page.subchapters.length > 0 && (
                    <div className="flex flex-col gap-1 pl-8 md:pl-12">
                      {page.subchapters.map((subchapter) => (
                        <Link
                          key={subchapter.id}
                          to={`./${page.page}#${subchapter.id}`}
                          className="text-theme py-1 hover:underline"
                        >
                          {subchapter.title}
                        </Link>
                      ))}
                    </div>
                  )}
              </div>
            );
          })}
        </div>
      </ContainerInner>
    </aside>
  );
};

export { Summary };
