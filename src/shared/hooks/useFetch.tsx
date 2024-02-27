import axios from 'axios';
import { useEffect, useState } from 'react';

export const useFetch = async (
  url: string,
  data: any = null,
  headers: any = null,
) => {
  return (
    await axios.get(url, {
      data: data,
      headers: headers,
    })
  ).data;
};
