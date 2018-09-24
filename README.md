#### 上传图书接口
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

- 服务器需返回：
