import { rest } from 'msw';

type RestPostParams = Parameters<(typeof rest)['post']>;

export function mockApi<Response extends Record<string, any>>(
  _path: RestPostParams[0],
  resolver: RestPostParams[1] | Response,
) {
  if (typeof resolver === 'object') {
    return rest.post(_path, (req, res, ctx) => {
      return res(ctx.json(resolver));
    });
  }

  return rest.post(_path, resolver);
}
