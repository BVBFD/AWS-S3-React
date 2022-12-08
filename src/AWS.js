import AWS from "aws-sdk";

class AWSConfig {
  constructor(accessKeyId, secretAccessKey, REGION, S3_BUCKET) {
    this.accessKeyId = accessKeyId;
    this.secretAccessKey = secretAccessKey;
    this.REGION = REGION;
    this.S3_BUCKET = S3_BUCKET;

    this.myBucket = new AWS.S3({
      params: { Bucket: this.S3_BUCKET },
      region: this.REGION,
    });

    AWS.config.update({
      credentials: {
        accessKeyId: this.accessKeyId,
        secretAccessKey: this.secretAccessKey,
      },
    });
  }

  uploadFile = (file, setProgress, setShowAlert, setSelectedFile) => {
    const uid = new Date().valueOf();
    const params = {
      ACL: "public-read",
      Body: file,
      Bucket: this.S3_BUCKET,
      Key: `${uid}` + file.name,
    };

    this.myBucket
      .putObject(params)
      .on("httpUploadProgress", (evt) => {
        setProgress(Math.round(evt.loaded / evt.total) * 100);
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
          setSelectedFile(null);
        }, 3000);
      })
      .send((err) => {
        if (err) console.log(err);
      });
  };

  downloadFileList = (setFiles) => {
    this.myBucket.listObjects((err, list) => {
      if (err) return console.log(err);
      setFiles(list.Contents);
    });
  };

  downloadFileObject = (e) => {
    const fileName = e.target.innerText;
    const params = { Bucket: this.S3_BUCKET, Key: fileName };
    this.myBucket.getObject(params, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
        const imgUrl = URL.createObjectURL(
          new Blob([data.Body.buffer], { type: "image/jpg" })
        );
        // HTML에 뜨게하기
        // imgRef.current.src = imgUrl;

        // 다운로드 창 뜨게하기
        let hiddenElement = document.createElement("a");
        hiddenElement.href = "data:attachment/text," + imgUrl;
        hiddenElement.target = "_blank";
        hiddenElement.download = `${fileName}.jpg`;
        hiddenElement.click();
      }
    });
  };
}

export default AWSConfig;
