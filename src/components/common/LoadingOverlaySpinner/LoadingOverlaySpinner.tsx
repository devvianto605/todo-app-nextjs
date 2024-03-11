import React from "react";
import * as Styled from "./LoadingOverlaySpinner.styled";

const LoadingOverlaySpinner = () => {
  return (
    <React.Fragment>
      <Styled.SpinnerOverlayContainer>
        {Array(3)
          .fill(null)
          .map((arr, idx) => (
            <Styled.SpinnerOverlayDot key={`spinner-${idx}`} />
          ))}
      </Styled.SpinnerOverlayContainer>
    </React.Fragment>
  );
};

export default LoadingOverlaySpinner;
