const useItemTotal = (cart) => {
    const total = cart.reduce((total, item) => {
        return total += item.quantity
    }, 0)
    return total
}

export default useItemTotal