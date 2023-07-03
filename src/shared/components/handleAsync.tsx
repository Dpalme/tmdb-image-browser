import { ReactNode } from 'react';
import { LoadingSpinner } from './loadingSpinner';
import { AxiosError } from 'axios';
import { ErrorMessage } from './errorMessage';

export const HandleAsync = (props: {
  children: ReactNode;
  loading: boolean | undefined;
  error: AxiosError<any> | undefined | unknown;
  fallback?: JSX.Element;
}) => {
  return props.loading ? (
    !!props.fallback ? (
      props.fallback
    ) : (
      <LoadingSpinner />
    )
  ) : (
    <>
      {!!props.error && (
        <ErrorMessage
          // @ts-ignore
          message={props.error?.response?.data?.error || props.error.toString()}
          className="mb-4"
        />
      )}
      {props.children}
    </>
  );
};
