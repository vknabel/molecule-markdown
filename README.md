# Molecule Markdown

[![CircleCI](https://img.shields.io/circleci/project/github/vknabel/molecule-markdown.svg?style=flat-square)](https://circleci.com/gh/vknabel/molecule-markdown)
[![Codecov](https://img.shields.io/codecov/c/github/vknabel/molecule-markdown.svg?style=flat-square)](https://codecov.io/gh/vknabel/molecule-markdown)
[![npm (scoped)](https://img.shields.io/npm/v/@molecule/markdown.svg?style=flat-square)](https://www.npmjs.com/package/@molecule/markdown)

Molecule Markdown provides you an Angular directive `'# Title'|md` and a corresponding service, `MarkdownService`, which allows you to provide any markdown parser you wish.
On the other hand, you need to provide a subclass for it in order to `MarkdownPipe`.

## Example

```typescript
@NgModule({
  import: [MarkdownModule],
  declarations: [MyComponent],
  providers: [{
    provide: MarkdownService,
    useClass: YourMarkdownService
  }]
})
export class MyModule {}

@Component({
  template: '{{myMarkdownText|md}}'
})
export class MyComponent {
  @Input() public myMarkdownText: string;
}
```

### Using Marked
```typescript
@Injectable()
export class MarkdedService extends MarkdownService {
  constructor() {
    marked.setOptions({ /* configuration options */ });
  }
  public markdownToHtml(markdown: string, ...args: any[]): string {
    return marked(markdown, options);
  }
}
```

### Using Markdown It

```typescript
@Injectable()
export class MarkdownItService extends MarkdownService {
  private readonly markdownIt: MarkdownIt;
  constructor() {
    this.markdownIt = new MarkdownIt();
  }
  public markdownToHtml(markdown: string, ...args: any[]): string {
    return this.markdownIt.render(markdown);
  }
}
```

## Installation

```bash
$ npm install --save @molecule/markdown
```

## Author

Valentin Knabel, [@vknabel](https://twitter.com/vknabel), dev@vknabel.com

## License

@molecule/markdown is available under the [MIT](LICENSE) license.
