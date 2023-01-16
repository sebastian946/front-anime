import { Component, OnInit } from '@angular/core';
import { AnimeServicesService } from 'src/app/services/anime-services.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search: string = '';
  constructor(private animeService: AnimeServicesService) { }

  ngOnInit(): void {
  }

  searchAnime(){
    this.animeService.getSearchAnime(this.search).subscribe(result => {
      return this.animeService.resultsAnime(result.data);
    });
  }


}
