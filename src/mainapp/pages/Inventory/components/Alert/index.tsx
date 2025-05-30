import { FC, useMemo } from "react";
import { Archive } from "lucide-react";
import { useProductsContext } from "../../hooks";

export const Alert: FC = () => {
  const { productsDepreciated } = useProductsContext();
  const currentProduct = useMemo(() => productsDepreciated[0], [productsDepreciated]);

  return (
    <div className="w-full mt-auto bg-graal-gray-250 rounded-lg p-4">
      <div className="flex items-center gap-2">
        <Archive className="text-graal-yellow-50" /> <p className="font-medium text-lg">Alerta de estoque</p>
      </div>
      {productsDepreciated.length ? (
        <>
          <p className="ml-8">O seguinte produto está abaixo de seu nível de reabastecimento e precisa ser reabastecido:</p>
          <p className="font-semibold mt-2 ml-8 text-sm">
            {currentProduct?.nome} - Qtd. Atual: {currentProduct.quantidade}, Realocar minimo no estoque: {currentProduct?.quantidade_min}
          </p>
        </>
      ) : (
        <>
          <p className="ml-8">Tudo está em ordem</p>
          <p className="mt-2 ml-8 text-sm">Nenhum produto precisa ser reabastecido</p>
        </>
      )}
    </div>
  );
};
