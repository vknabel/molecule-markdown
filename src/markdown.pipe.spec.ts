import { async } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { MarkdownPipe } from './markdown.pipe';
import { MarkdownService } from './markdown.service';
import { Component, Input } from '@angular/core';

describe('markdown pipe', () => {
  let sut: MarkdownPipe;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MarkdownPipe],
      providers: [{
        provide: MarkdownService,
        useValue: {
          markdownToHtml(markdown: string, ...args: any[]): string {
            return `html:${markdown}:${JSON.stringify(args)}`;
          }
        }
      }]
    }).compileComponents();
  }));

  beforeEach(() => {
    sut = new MarkdownPipe(TestBed.get(MarkdownService));
  });

  it('converts simple strings', () => {
    expect(sut.transform('str')).toEqual('html:str:[]');
  });

  it('converts simple strings and passes args', () => {
    expect(sut.transform('str2', 'hello', 'world')).toEqual('html:str2:["hello","world"]');
  });
});
