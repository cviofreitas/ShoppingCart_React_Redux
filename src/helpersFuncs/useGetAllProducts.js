const useGetAllProducts = (data) => {
    const result = Object.values(data);
    let newArray = [];
    result.forEach(array => array.forEach(value => newArray.push(value)))
    return newArray
}

export default useGetAllProducts