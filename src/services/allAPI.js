import commonAPI from "./commonAPI"
import SERVERURL from "./serverURL"


// saveVideoAPI - post http request, add component
export const saveVideoAPI = async (videoDetails) => {
    return await commonAPI('POST', `${SERVERURL}/uploadVideos`, videoDetails);
}

// getAllVideosAPI - get method, called view component, when component displays in browser inside its useEffect Hook
export const getAllVideosAPI = async () => {
    return await commonAPI('GET', `${SERVERURL}/uploadVideos`, "");
}

// saveHistoryAPI - post http method, videoCard component when clicked
export const saveHistoryAPI = async (historyDetails) => {
    return await commonAPI('POST', `${SERVERURL}/history`, historyDetails);
}

// getHistoryAPI - get http method, history component when loaded
export const getHistoryAPI = async () => {
    return await commonAPI('GET', `${SERVERURL}/history`, "");
}

// deleteHistoryAPI - delete method to serverURL/history/id called by history, when clicked on delete button
export const deleteHistoryAPI = async(id) => {
    return await commonAPI(`DELETE`, `${SERVERURL}/history/${id}`, {})
}


// removeVideoAPI - delete method to serverURL/uploadVideos/id called by VideoCard, when clicked on delete button
export const removeVideoAPI = async(id) => {
    return await commonAPI(`DELETE`, `${SERVERURL}/uploadVideos/${id}`, {})
}

// saveCategoryAPI - post http method, Add Buttin in Category component when clicked
// categoryDetails = {categoryName, allVideos}
export const saveCategoryAPI = async (categoryDetails) => {
    return await commonAPI('POST', `${SERVERURL}/categories`, categoryDetails);
}

// getAllCategoryAPI - get method, called category component, when component displays in browser inside its useEffect Hook
export const getAllCategoryAPI = async () => {
    return await commonAPI('GET', `${SERVERURL}/categories`, {});
}


// deleteCategoryAPI - delete method to serverURL/categories/id called by Category, when clicked on delete button
export const deleteCategoryAPI = async(id) => {
    return await commonAPI(`DELETE`, `${SERVERURL}/categories/${id}`, {})
}


// updateCategoryAPI - put method to serverURL/categories/id called by Category, when video drop over the category
export const updateCategoryAPI = async(categoryDetails) => {
    return await commonAPI(`PUT`, `${SERVERURL}/categories/${categoryDetails.id}`, categoryDetails)
}
