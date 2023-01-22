const useCartTotalPrice = (cart) => {
    const total = cart.reduce((total, item) => {
        return total += (item.quantity * item.price)
    }, 0)
    return total
}

export default useCartTotalPrice