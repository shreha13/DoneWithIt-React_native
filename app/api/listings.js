import apiClient from "./Client";

const getListings = () => apiClient.get('listings');

export default {
    getListings,
}