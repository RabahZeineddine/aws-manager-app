import ToastAlert from "components/ToastAlert";
import React, { PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { ErrorSliceState } from "config/@types/error";
import { RootState } from "app/store";
import { useAppDispatch } from "app/hooks";
import { RESET_APP_ERROR } from "app/store/slices/common";

type InterceptorProps = {};

function hasError(errorReducer: ErrorSliceState, resetError: () => void) {
  const error = errorReducer.payload;
  if (error)
    return (
      <ToastAlert severity="error" text={error.details} onExited={resetError} />
    );
  else return null;
}

function Interceptor(props: PropsWithChildren<InterceptorProps>) {
  const errorReducer = useSelector((state: RootState) => state.error);
  const dispatch = useAppDispatch();

  const resetError = () => {
    dispatch(RESET_APP_ERROR());
  };

  return (
    <React.Fragment>
      {hasError(errorReducer, resetError)}
      {props.children}
    </React.Fragment>
  );
}

export default Interceptor;
