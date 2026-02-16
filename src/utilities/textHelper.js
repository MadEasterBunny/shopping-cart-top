export const truncateText = (str) => {
    return str.length > 50 ? str.substring(0, 47) + '...' : str;
}