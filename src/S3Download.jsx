import "./App.css";
import React, { useRef, useState } from "react";
// import AWS from "aws-sdk";
import { Row, Col, Button, Input, Alert } from "reactstrap";

const S3Download = ({ AWS }) => {
  const [files, setFiles] = useState([]);
  //   const imgRef = useRef();

  //   const accessKeyId = "AKIAYBPRHC5LSZLMDFGF";
  //   const secretAccessKey = "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";
  //   const REGION = "ap-northeast-2";
  //   const S3_BUCKET = "sasm-aws-s3-test";

  //   AWS.config.update({
  //     credentials: {
  //       accessKeyId,
  //       secretAccessKey,
  //     },
  //   });

  //   const myBucket = new AWS.S3({
  //     params: { Bucket: S3_BUCKET },
  //     region: REGION,
  //   });

  //   const downloadFileList = () => {
  //     myBucket.listObjects((err, list) => {
  //       if (err) return console.log(err);
  //       setFiles(list.Contents);
  //     });
  //   };

  //   const downloadFileObject = (e) => {
  //     const fileName = e.target.innerText;
  //     const params = { Bucket: S3_BUCKET, Key: fileName };
  //     myBucket.getObject(params, (err, data) => {
  //       if (err) {
  //         console.log(err);
  //       } else {
  //         console.log(data);
  //         const imgUrl = URL.createObjectURL(
  //           new Blob([data.Body.buffer], { type: "image/jpg" })
  //         );
  //         // HTML에 뜨게하기
  //         // imgRef.current.src = imgUrl;

  //         // 다운로드 창 뜨게하기
  //         let hiddenElement = document.createElement("a");
  //         hiddenElement.href = "data:attachment/text," + imgUrl;
  //         hiddenElement.target = "_blank";
  //         hiddenElement.download = `${fileName}.jpg`;
  //         hiddenElement.click();
  //       }
  //     });
  //   };

  return (
    <div className="Download">
      <div className="Download-header">
        <Row>
          <Col>
            <h1>S3Download</h1>
          </Col>
        </Row>
      </div>
      <div className="Download-body">
        <Row>
          <Col>
            <Button
              onClick={() => AWS.downloadFileList(setFiles)}
              className="Download-button"
            >
              Get File List
            </Button>
          </Col>
        </Row>
      </div>
      <div className="list">
        {files.map((file) => (
          <Row key={file.Key}>
            <Col>
              <div
                onClick={(e) => AWS.downloadFileObject(e)}
                className="File-Object"
              >
                {file.Key}
              </div>
            </Col>
          </Row>
        ))}
      </div>
      {/* <div className="imgBox">
        <img ref={imgRef} />
      </div> */}
    </div>
  );
};

export default S3Download;
