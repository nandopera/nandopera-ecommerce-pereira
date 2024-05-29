import { Children, useEffect, useState } from "react";
import { createContext } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase";

export const CategoriesContext = createContext({
    categoriesMap: {}
})

export const CategoriesProvider = ({ Children }) => {
    const [categoriesMap, setCategoriesMap] = useState({})

    useEffect(() => {
        const getCategories = async () => {
            const caegoryMap = await getCategoriesAndDocuments()
            setCategoriesMap(categoryMap)
        }

        getCategories()
    },[])

    const value = {categoriesMap}
    return (
        <CategoriesContext.Provider value={value}>
            {Children}
        </CategoriesContext.Provider>
    )
}