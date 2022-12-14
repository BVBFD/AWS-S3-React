# AWS-S3-React

AWS ACL 활성화 상태에서 CORS 허용 " * " 를 통해서, 일단 누구나 접근이 가능하게 일단 Public 상태에서 테스트를 진행하였음.

## 실행방법
```
rm -rf .git
npm install
npm run dev
```

## AWS_S3 객체 소유권 편집

![aws-acl-config](https://user-images.githubusercontent.com/83178592/206943895-3953b46c-3bbc-4e8d-ae53-ff40b774381f.png)

## AWS_S3 퍼블릭 액세트 차단 편집

![aws-public-access-config](https://user-images.githubusercontent.com/83178592/206943910-c948079f-85a2-47b8-a3b1-1959fbb85775.png)

## AWS_S3 CORS 편집

![aws-cors-config](https://user-images.githubusercontent.com/83178592/206943912-581db724-2139-488e-8228-fb00717ca487.png)


```json
[
    {
        "AllowedHeaders": [
            "*"
        ],
        "AllowedMethods": [
            "GET",
            "PUT",
            "POST",
            "HEAD"
        ],
        "AllowedOrigins": [
            "*"
        ],
        "ExposeHeaders": [
            "x-amz-server-side-encryption",
            "x-amz-request-id",
            "x-amz-id-2"
        ],
        "MaxAgeSeconds": 3000
    }
]
```

일단 이렇게 Public 상태에서 테스트 하여 정상적으로 작동 중임. 

접근 권한 관련해서도 관련 AWS ACL, CORS 설정을 해보고, 

제2안 Node-Red를 진행하면서 Public 상태가 아닌 상태에서 Test 진행을 해볼 예정임.

CF) !!.env 파일 안의 개인 AWS_S3 accessKey, AWS_S3 secretKey ... 등등 관련 설정은 본인 AWS_S3 설정으로 해주어야함.

    .env 파일은 올리지 않았기 때문에, 본인 AWS_S3 설정으로 Test 해주어야함.

## StaticReport-{날짜} 형식의 파일 저장

S3안에 StaticReport 문자가 Prefix로 붙은 UTF-8 파일만 뽑아오는 로직이기 때문에, StaticReport-{날짜} 이런 형식으로 

S3에 파일을 저장해주어야 관련 코드 로직이 제대로 파일 리스트를 불러옴.

![S3_FileList](https://user-images.githubusercontent.com/83178592/206944730-f3c8363c-6892-41b0-adbb-f05f212ff98e.png)
