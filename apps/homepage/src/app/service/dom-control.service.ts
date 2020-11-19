import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DomControlService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  public addScript(url: string) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    this.document.head.appendChild(script);
  }

  public addStylesheets(url: string) {
    const link = document.createElement('link');
    link.href = url;
    link.rel = 'stylesheet';
    this.document.head.appendChild(link);
  }
}
