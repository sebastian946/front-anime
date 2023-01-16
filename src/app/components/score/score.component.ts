import { Component, OnInit } from '@angular/core';
import { DataAnimes } from 'src/app/interfaces/data-animes';
import { AnimeServicesService } from 'src/app/services/anime-services.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  search: string = '';
  resultTitle:any = [];
  resultMessage:any = [];
  resultImage:any = [];
  averange:number = 0;
  length= new Array();
  hiddeInformation : boolean = false;
  constructor(private animeService:AnimeServicesService) { }

  ngOnInit(): void {
  }

  searchNameAnime(){
    this.hiddeInformation = true;
    this.animeService.getAverageAnime(this.search).subscribe(result => {
      this.resultTitle = result.title;
      this.resultImage = result.img_url;
      this.length = new  Array(result.count);
      this.resultMessage = result.message;
      this.averange = result.averange;
      console.log(this.length);
    });
  }



}
