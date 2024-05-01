import { create } from 'zustand'

const useProductStore = create((set) => ({
  products: [
    {
      image: 'https://www.lg.com/content/dam/channel/wcms/id/images/monitor/24mp400-b_ati_eain_id_c/24MP400-B_ATI_EAIN_ID_C-450x450.jpg',
      title: '23.8" IPS Full HD Monitor dengan 3-Side Virtually Borderless Design ',
      desc: 'Autumn And Winter Casual cotton-padded jacket cotton-padded jacket cotton-padded jacket cotton-padded jacket cotton-padded jacket cotton-padded jacket...',
      price: 5000
    },
    {
      image: 'https://images.philips.com/is/image/philipsconsumer/3069903f2c584919bea5b022005e5328?$jpglarge$&wid=1250',
      title: 'Monitor UltraWide LCD monitor 345E2AE/70',
      desc: 'Autumn And Winter Casual cotton-padded jacket...',
      price: 7000
    },
    {
      image: 'https://www.lg.com/content/dam/channel/wcms/id/images/monitor/24gq50f-b_atiq_eain_id_c/md07567139-450x450.jpg',
      title: 'Monitor Game Full HD UltraGear™ 24”',
      desc: 'Autumn And Winter Casual cotton-padded jacket...',
      price: 9000
    }
  ],
  cart: [],
  addToCart: (item) => set((state) => ({ cart: [item, ...state.cart] })),
}))

export default useProductStore;