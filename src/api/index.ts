import { ServerResponse } from 'http';

interface RequestOptions {
  headers?: any;
  method?: string;
  url: string;
  data?: any;
  res?: ServerResponse;
}

const request = async (params: RequestOptions) => {
  const request_init: RequestInit = {
    method: params.method || 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...params.headers,
    },
  };
  if (params.data) {
    request_init.body = JSON.stringify(params.data);
  }

  try {
    const response = await fetch(params.url, request_init);
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error('FETCH ERROR');
    }
  } catch (error) {
    console.log(error);
    throw new Error('FETCH ERROR');
  }
};

type Maybe<T> = T | null | undefined;

export type getTestDataVariables = { skip?: Maybe<number>; limit?: Maybe<number> }
export type getTestDataType = {
  item_list: any[]
}
export const api_getTestData = async (variables: getTestDataVariables): Promise <{ data: getTestDataType }> => {
  return request({ method: 'POST', url: '/api/test', data: variables });
}

