import { create } from 'zustand'

const useProductStore = create((set) => ({
  products: [
    {
      image: 'https://www.lg.com/content/dam/channel/wcms/id/images/monitor/24mp400-b_ati_eain_id_c/24MP400-B_ATI_EAIN_ID_C-450x450.jpg',
      title: '23.8" IPS Full HD Monitor dengan 3-Side Virtually Borderless Design ',
      desc: 'Autumn And Winter Casual cotton-padded jacket cotton-padded jacket cotton-padded jacket cotton-padded jacket cotton-padded jacket cotton-padded jacket...',
      price: 5000000,
      quantity: 0
    },
    {
      image: 'https://images.philips.com/is/image/philipsconsumer/3069903f2c584919bea5b022005e5328?$jpglarge$&wid=1250',
      title: 'Monitor UltraWide LCD monitor 345E2AE/70',
      desc: 'Autumn And Winter Casual cotton-padded jacket...',
      price: 7000000,
      quantity: 0
    },
    {
      image: 'https://www.lg.com/content/dam/channel/wcms/id/images/monitor/24gq50f-b_atiq_eain_id_c/md07567139-450x450.jpg',
      title: 'Monitor Game Full HD UltraGear™ 24”',
      desc: 'Autumn And Winter Casual cotton-padded jacket...',
      price: 9000000,
      quantity: 0
    },
    {
      image: 'https://images.philips.com/is/image/philipsconsumer/277c9dfb3f5c4f28a9e0b01a00f3e034?wid=420&hei=360&$jpglarge$',
      title: 'Monitor LCD Full HD 243V7QDSB/70”',
      desc: 'Autumn And Winter Casual cotton-padded jacket...',
      price: 7000000,
      quantity: 0
    },
  ],
  cart: [],
  addToCart: (item) => set((state) => {
    if (state.cart.some(cartItem => cartItem.title === item.title)) {
      alert("Item already in cart");
      return state.cart;
    } else {
      item.quantity = 1;
      alert("Produk berhasil dimasukkan ke keranjang");
      return { cart: [item, ...state.cart] };
    }
  }),
  addCartQuantity: (index) => set((state) => {
    var newList = [];
    state.cart.forEach(element => {
      newList.push(element);
    });
    newList[index].quantity += 1;
    return { cart: [...newList] };
  }),
  removeCartQuantity: (index) => set((state) => {
    var newList = [];
    state.cart.forEach(element => {
      newList.push(element);
    });
    newList[index].quantity -= 1;
    return { cart: [...newList] };
  }),
  removeFromCart: () => set((state) => {
    var newList = [];
    state.cart.forEach(element => {
      newList.pop(element);
    });
    return { cart: [...newList] };
  }),
  removeAllFromCart: () => set((state) => {
    return { cart: [] };
  }),
  transactionHistories: [],
  addToTransaction: (item) => set((state) => ({ transactionHistories: [...state.transactionHistories, item] }))
}))

export default useProductStore;