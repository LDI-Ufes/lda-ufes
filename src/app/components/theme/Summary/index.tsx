import { Button } from "@/app/components/ui/Button";
import { ContainerInner } from "@/app/components/ui/Container";
import { Pagination } from "@/app/router/routes";
import {
  MdHome,
  MdOutlineCloseFullscreen,
  MdOutlineOpenInFull,
} from "react-icons/md";

import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { SummarySearch } from "./SummarySearch";
import { cn } from "@/app/utils/cn";

interface SummaryProps {
  className?: string;
  hasSearch?: boolean;
}

const Summary = ({ className, hasSearch = true }: SummaryProps) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const location = useLocation();
  const currentPathname = location.pathname;

  const getSortedPagination = () => {
    const activePageIndex = Pagination.findIndex((page) =>
      currentPathname.includes(page.page),
    );

    if (activePageIndex === -1) {
      return Pagination;
    }

    const activePage = Pagination[activePageIndex];
    const otherPages = Pagination.filter(
      (_, index) => index !== activePageIndex,
    );

    return [activePage, ...otherPages];
  };

  const sortedPagination = getSortedPagination();

  return (
    <aside
      className={cn(
        "sticky top-40 max-h-[580px] w-full max-w-[25rem] flex-col gap-8 self-start lg:flex",
        className,
      )}
    >
      {hasSearch === true && <SummarySearch />}
      <ContainerInner className="bg-theme-background flex flex-col gap-4 self-start overflow-y-auto rounded-2xl border-2 border-slate-300 px-5 py-4 md:px-8 md:py-6 lg:max-h-[580px]">
        <header className="flex w-full items-center justify-between gap-4">
          <h2 className="text-primary text-2xl font-bold uppercase">Sumário</h2>
          {window.innerWidth > 1024 && (
            <Button
              variant="secondary"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? (
                <MdOutlineCloseFullscreen className="size-6" />
              ) : (
                <MdOutlineOpenInFull className="size-6" />
              )}
              <span className="hidden text-sm lg:block">
                {isExpanded ? "Minimizar" : "Expandir"}
              </span>
            </Button>
          )}

          {window.innerWidth < 1024 && (
            <Button variant="secondary" asChild>
              <Link to={`/${Pagination[0].page}`}>
                <MdHome className="size-6" />
              </Link>
            </Button>
          )}
        </header>
        <div className="flex flex-col">
          {!isExpanded && window.innerWidth > 1024 ? (
            <div className="flex flex-col">
              {Pagination.map((page) => {
                const isActualChapter = currentPathname.includes(page.page);

                if (isActualChapter) {
                  return (
                    <>
                      <div
                        key={page.title}
                        className="bg-primary w-full rounded-lg px-3 py-2 text-white lg:px-5 lg:py-3"
                      >
                        <span className="text-base font-bold text-white lg:text-lg">
                          {page.title}
                        </span>
                      </div>
                    </>
                  );
                }
              })}
            </div>
          ) : (
            <>
              {sortedPagination.map((page) => {
                const isActualChapter = currentPathname.includes(page.page);

                const chapterNumber =
                  Pagination.filter((p) => p.template === "chapter").indexOf(
                    page,
                  ) + 1;

                if (isActualChapter) {
                  return (
                    <div
                      key={page.title}
                      className="bg-primary mb-3 rounded-lg px-3 py-2 text-white lg:px-5 lg:py-3"
                    >
                      <span className="text-base font-bold text-white lg:text-lg">
                        {page.title}
                      </span>
                    </div>
                  );
                }

                return (
                  <div
                    key={page.title}
                    className="flex flex-col border-b-2 border-slate-300 pt-2 pb-3 last:border-b-0 lg:pt-3 lg:pb-5"
                  >
                    <div className="flex cursor-pointer gap-3">
                      {page.template === "chapter" && (
                        <span className="text-primary text-2xl lg:text-3xl">
                          {chapterNumber.toString().padStart(2, "0")}
                        </span>
                      )}
                      <Link
                        to={`/${page.page}`}
                        className="flex-grow text-base font-bold hover:underline lg:text-lg"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {page.title}
                      </Link>
                    </div>
                    {page.subchapters && page.subchapters.length > 0 && (
                      <div className="flex flex-col gap-1 pl-8 md:pl-12">
                        {page.subchapters.map((subchapter) => (
                          <Link
                            key={subchapter.id}
                            to={`${page.page}#${subchapter.id}`}
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
            </>
          )}
        </div>
      </ContainerInner>
    </aside>
  );
};

export { Summary };
