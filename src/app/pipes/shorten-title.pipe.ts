import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenTitle'
})
export class ShortenTitlePipe implements PipeTransform {

  transform(value: string, wordCount?: number): string {
    if(wordCount == null) {
      wordCount = 3;
    }
    return value.split(" ").slice(0, wordCount).join(" ");
  }

}
// Elas metsas mutionu, keset metsa -- split(" ")
// ['Elas', 'mestas', 'mutionu,', 'keset', 'metsa'] -- .slice(0,3)
// ['Elas', 'mestas', 'mutionu,'] -- .join("::")
// Elas::metsas::mutionu,    -- .replace(',',"")