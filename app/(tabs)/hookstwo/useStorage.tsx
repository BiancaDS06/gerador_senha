import AsyncStorage from "@react-native-async-storage/async-storage";

type StorageItem = any; // Altere para o tipo específico de dados que você está armazenando, se aplicável.

const useStorage = () => {
    // Buscar os itens salvos
    const getItem = async (key: string): Promise<StorageItem[]> => {
        try {
            const passwords = await AsyncStorage.getItem(key);
            return passwords ? JSON.parse(passwords) : [];
        } catch (error) {
            console.error("Erro ao buscar", error);
            return [];
        }
    };

    // Salvar um item no storage
    const saveItem = async (key: string, value: StorageItem): Promise<void> => {
        try {
            // busca os itens que existem no armazenamento
            const passwords = await getItem(key);
            passwords.push(value);

            await AsyncStorage.setItem(key, JSON.stringify(passwords));
        } catch (error) {
            console.error("ERROR AO SALVAR", error);
        }
    };

    // Remover algo do storage
    const removeItem = async (key: string, item: StorageItem): Promise<StorageItem[] | void> => {
        try {
            const passwords = await getItem(key);
            const myPasswords = passwords.filter((password) => JSON.stringify(password) !== JSON.stringify(item));
            await AsyncStorage.setItem(key, JSON.stringify(myPasswords));
            return myPasswords;
        } catch (error) {
            console.error("ERRO AO DELETAR", error);
        }
    };
    

    return {
        getItem,
        saveItem,
        removeItem,
    };
};

export default useStorage;
