import { usePagesList } from "../../../data/hooks";
import { Page } from "../../../components/template";

import * as S from "./styles";

export function Home() {
  const { routesForHome } = usePagesList();
  return (
    <Page className="overflow-hidden">
      <S.Container>
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
