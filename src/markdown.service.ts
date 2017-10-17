import { Injectable } from '@angular/core';

@Injectable()
export abstract class MarkdownService {
  public abstract markdownToHtml(markdown: string, ...args: any[]): string;
}
