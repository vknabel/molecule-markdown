import { Pipe, PipeTransform } from '@angular/core';
import { MarkdownService } from './markdown.service';

@Pipe({
  name: 'md'
})
export class MarkdownPipe implements PipeTransform {
  constructor(private readonly markdownService: MarkdownService) {}

  public transform(value: string, ...args: any[]): string {
    return this.markdownService.markdownToHtml(value, ...args);
  }
}
