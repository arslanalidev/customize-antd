import React from "react";
import { Result, Button } from "antd";

const PageNotFound = (props) => {
  const backToHome = () => {
    props.history.push("/");
  };
  return (
    <>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button onClick={backToHome} type="primary">
            Back Home
          </Button>
        }
      />
      ,
    </>
  );
};

export default PageNotFound;
