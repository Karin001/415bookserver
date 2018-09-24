#### 上传图书信息接口
- url：'你的本地服务器地址/api/uploadBook' 
- method：post
- requestBody：{
  bookname: string;
  bookauth: string;
  bookprice: number;
  amount: number;
  bookdescription?: string;
  dir?: string;
  bookyear?: string;
  packege?: string;
  version?: string;
  publisher?: string;
  page?: string;
  wordsNum?: string;
  kaiben?: string;
}
> ‘?’号代表可暂时不填的信息

- 服务器需返回：{
  success: boolean;
  errorinfo: string;
  idbook: string;
}

#### 上传图书封面接口
- url: '你的本地服务器地址/api/uploadImg'
- method:post
- requestBody:图片file
- 服务器需返回：一个成功的状态码比如200
