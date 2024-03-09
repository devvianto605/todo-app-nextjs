/* eslint-disable max-depth */
/* eslint-disable complexity */
import type { AxiosRequestConfig, AxiosResponse, Method } from 'axios';

import axios from 'axios';
// import axios, { HttpStatusCode } from 'axios';
// import { getSession, signOut } from 'next-auth/react';
// import type { Session } from '@types';
// import { refreshNewToken } from '@services';
// import { getCookie, setCookie } from '@utils';
// import { redirect } from 'next/navigation';
// import { isUndefined } from 'lodash';

type AxiosService<TBody extends Record<string, unknown> | FormData> = {
  url?: string;
  method?: Method;
  headers?: Record<string, string>;
  body?: TBody;
  params?: Record<string, unknown>;
};

const TIMEOUT = {
  DEV: 20000,
  PRD: 30000,
};

const BASE_URL = process.env.NEXT_PUBLIC_BASE_API_URL ?? 'http://localhost:3001';

const timeout = process.env.NODE_ENV === 'development' ? TIMEOUT.DEV : TIMEOUT.PRD;

export default async function axiosWrapper<TRequestBody extends Record<string, unknown> | FormData, TResponse>(
  config: AxiosService<TRequestBody>,
): Promise<AxiosResponse<TResponse>> {
  // const session = (await getSession()) as Session;

  try {
    const { url, method = 'GET', headers, body, params } = config;

    // const token = session?.user?.idToken;

    const mergeHeaders = {
      // Authorization: token ? `Bearer ${token}` : undefined,
      ...headers,
    };

    const axiosConfig: AxiosRequestConfig = {
      data: body,
      headers: mergeHeaders,
      method,
      params,
      timeout,
      url: `${BASE_URL}/${url}`,
    };

    const response = await axios(axiosConfig);

    return response;
  } catch (error: unknown) {
    // if (axios.isAxiosError(error)) {
    //   const newTokenCookie = await getCookie('newToken');

    //   const _refreshToken = session?.user?.refreshToken;

    //   if (error.response?.status === HttpStatusCode.Unauthorized && !newTokenCookie && !isUndefined(window)) {
    //     const resp = await refreshNewToken({ refreshToken: _refreshToken });

    //     if (resp.status === (HttpStatusCode.Ok as number)) {
    //       const newToken = {
    //         idToken: resp.data.id_token,
    //         refreshToken: resp.data.refresh_token,
    //       };
    //       setCookie('newToken', JSON.stringify(newToken));

    //       setTimeout(() => {
    //         window.location.reload();
    //       }, 1000);
    //     } else {
    //       await signOut();
    //       redirect('/login');
    //     }
    //   }

    //   if (error.response?.status === HttpStatusCode.InternalServerError) {
    //     throw new Error(error.message);
    //   }

    //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
    //   return error.response || (error.message as any);
    // }

    throw error;
  }
}
