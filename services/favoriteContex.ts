// // FavoritesContext.tsx
// import React, { createContext, useContext, useState, ReactNode } from 'react';
// import { Product } from '../types/product'; // Ajuste o caminho conforme necessário

// type FavoritesContextType = {
//     favorites: Product[];
//     addToFavorites: (product: Product) => void;
//     removeFromFavorites: (id: number) => void;
//     isFavorite: (id: number) => boolean;
// };

// const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

// export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
//     const [favorites, setFavorites] = useState<Product[]>([]);

//     const addToFavorites = (product: Product) => {
//         if (!isFavorite(product.id)) {
//             setFavorites((prevFavorites) => [...prevFavorites, product]);
//         }
//     };

//     const removeFromFavorites = (id: number) => {
//         setFavorites((prevFavorites) => prevFavorites.filter((item) => item.id !== id));
//     };

//     const isFavorite = (id: number) => {
//         return favorites.some((item) => item.id === id);
//     };

//     return (
//         <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, isFavorite }}>
//             {children}
//         </FavoritesContext.Provider>
//     );
// };

// export const useFavorites = () => {
//     const context = useContext(FavoritesContext);
//     if (!context) {
//         throw new Error("useFavorites must be used within a FavoritesProvider");
//     }
//     return context;
// };