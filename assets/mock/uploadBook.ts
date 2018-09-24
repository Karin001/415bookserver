import { UploadBookResponseBodyModel } from '../../app/core/rest-api/books/books-model';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

export const UploadBookResponseBody: UploadBookResponseBodyModel = {
  success: true,
  errorinfo: '',
  idbook: '0'
};
export const UploadBookErrorResponseBody: UploadBookResponseBodyModel = {
  success: false,
  errorinfo: '服务器抽风',
  idbook: ''
};
export const UploadBookErrorResponse = new HttpErrorResponse({
  status: 503,
  error: UploadBookErrorResponseBody
});
export const UploadBookResponse = new HttpResponse({
  status: 200,
  body: UploadBookResponseBody
});

export const UploadImgResponse = new HttpResponse({
  status: 200,
  body: {}
});
