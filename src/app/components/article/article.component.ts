import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent{

  @Input() article!: Article;
  @Input()  index!: number
  constructor() { }

  onClick(){}
  
  openArticle(){
    window.open( this.article.url, '_blank');
  }
}
