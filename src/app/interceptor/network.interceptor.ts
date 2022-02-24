import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { GlobalVariablesService } from '../services/global-variables.service';

@Injectable()
export class NetworkInterceptor implements HttpInterceptor {
  constructor(private global: GlobalVariablesService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.global.loading_show();
    return next.handle(request).pipe(
      finalize(() => {
        this.global.loading_hide();
      })
    );
  }
}
