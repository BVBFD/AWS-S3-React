import "./App.css";
import AWSConfig from "./AWS";
import S3Download from "./S3Download";
import S3Upload from "./S3Upload";

const App = () => {
  const AWS = new AWSConfig(
    `${import.meta.env.VITE_accessKeyId}`,
    `${import.meta.env.VITE_secretAccessKey}`,
    `${import.meta.env.VITE_REGION}`,
    `${import.meta.env.VITE_S3_BUCKET}`
  );

  return (
    <div>
      <S3Upload AWS={AWS} />
      <S3Download AWS={AWS} />
    </div>
  );
};

export default App;
