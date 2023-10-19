import { createContext, useContext, useState } from "react";

export const ContextFavorite = createContext();
ContextFavorite.displayName = "Favoritos";

export default function FavoriteProvider({ children }) {
    const [favorites, setFavorites] = useState([]);

    return (
        <ContextFavorite.Provider value={{ favorites, setFavorites }}>{children}</ContextFavorite.Provider>
    )
}

export function useFavoriteContext() {
    const { favorites, setFavorites } = useContext(ContextFavorite);

    function addFavorite(newFavoriteAdded) {
        const repeatedFavorite = favorites.some(item => item.id === newFavoriteAdded.id);

        let newList = [...favorites];

        if (!repeatedFavorite) {
            newList.push(newFavoriteAdded);
            return setFavorites(newList);
        }

        return setFavorites(newList.filter(favorite => favorite.id !== newFavoriteAdded.id));
    }
    return {
        favorites,
        addFavorite
    }
}