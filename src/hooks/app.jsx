import { createContext, useContext, useState } from "react";
import { api } from "../services/api";

export const AppContext = createContext({});

function AppProvider({ children }) {
  const [data, setData] = useState({});

  async function updateCard({ title, description, price, Categoria }) {
    try {
      const response = await api.put("/cards", { title, description, price, Categoria }); // Salve a resposta da requisição
      const { card } = response.data;
      console.log(card)


      // Atualize o estado com os novos dados, preservando os dados anteriores
      setData({ card });
      alert("Prato editado com sucesso!");
      

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível editar");
      }
    }
  }

  return (
    <AppContext.Provider
      value={{
        updateCard,
        card: data.card, // Certifique-se de que o valor do card esteja acessível
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

function useApp() {
  const context = useContext(AppContext);
  return context;
}

export { AppProvider, useApp };
