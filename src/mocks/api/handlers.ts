import { mockApi } from '@/mocks/utils/mockAPI';
import { coupons, productItems } from '../data';

export const getProductItems__mockAPI = mockApi('/api/products', (req, res, ctx) => {
  return res(
    ctx.json({
      data: {
        item_list: productItems,
        total_count: productItems.length,
      },
    }),
  );
});

export const getCoupons__mockAPI = mockApi('/api/coupons', {
  data: {
    item_list: coupons,
    total_count: coupons.length,
  },
});

export const getProductItem__mockAPI = mockApi('/api/product_item', (req, res, ctx) => {
  const body = req.body as any;
  const item_no = parseInt(body.item_no);

  const product = productItems.find((product) => product.item_no === item_no);

  return res(
    ctx.json({
      data: {
        product,
      },
    }),
  );
});
