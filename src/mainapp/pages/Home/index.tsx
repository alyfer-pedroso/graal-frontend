import { usePagesList } from "@/data/hooks";
import { Page } from "@/components/template";

import * as S from "./styles";
import { cn } from "@/lib/utils";

export function Home() {
  const { routesForHome } = usePagesList();

  return (
    <Page className={cn({ "flex justify-center items-center": routesForHome.length >= 3 })}>
      <S.Container
        className={cn({
          "!justify-center": routesForHome.length < 3,
          "h-auto grid grid-cols-[repeat(2,400px)] grid-rows-[repeat(2,minmax(193.77px,240px))] lg:grid-rows-[repeat(2,240px)] !justify-center !items-center":
            routesForHome.length >= 3,
        })}
      >
        {routesForHome.map((page) => (
          <S.LinkCard key={page.path} to={page.path}>
            {Boolean(page.icon) && <img src={page.icon} alt={`Ícone de ${page.title}`} className="w-12 lg:w-14" />}

            <S.LinkCardTitle>{page.title}</S.LinkCardTitle>
            <S.LinkCardDescription>{page.description}</S.LinkCardDescription>
          </S.LinkCard>
        ))}
      </S.Container>
    </Page>
  );
}
