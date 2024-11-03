import { useSQLiteContext } from "expo-sqlite";
import { type Product } from "../types/product";

export function useProductDataBase() {
    const dataBase = useSQLiteContext();

    async function create(data: Omit<Product, 'id'>) {
        const estatement = await dataBase.prepareAsync(
            "INSERT INTO products (idCategory, image, title, description, price) VALUES ($idCategory, $image, $title, $description, $price)"
        );
        try {
            const result = await estatement.executeAsync({
                $idCategory: data.idCategory,
                $image: data.image,
                $title: data.title,
                $description: data.description,
                $price: data.price
            });
            const insertedRowId = result.lastInsertRowId.toLocaleString();

            return { insertedRowId };
        } catch (error) {
            throw error;
        } finally {
            await estatement.finalizeAsync();
        }
    }

    async function searchByName(title: string) {
        try {
            const query = "SELECT * FROM products WHERE title LIKE ?";
            const response = await dataBase.getAllAsync<Product>(query, `%${title}%`);
            return response;
        } catch (error) {
            throw error;
        }
    }

    // Função para obter todos os produtos
    async function getAllProducts() {
        try {
            const query = "SELECT * FROM products";
            const response = await dataBase.getAllAsync<Product>(query);
            return response;
        } catch (error) {
            throw error;
        }
    }

    return { create, searchByName, getAllProducts };
}
