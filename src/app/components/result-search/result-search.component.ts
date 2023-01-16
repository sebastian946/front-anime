import { Component, OnInit } from '@angular/core';
import { DataAnimes } from 'src/app/interfaces/data-animes';
import { AnimeServicesService } from 'src/app/services/anime-services.service';

@Component({
  selector: 'app-result-search',
  templateUrl: './result-search.component.html',
  styleUrls: ['./result-search.component.css']
})
export class ResultSearchComponent implements OnInit {
  animeResult: DataAnimes[] = [];
  page: number = 1;
  count:number = 0;
  tableSize: number = 5;
  tableSizes: any = [5,10,15,20];
  constructor(private animeService: AnimeServicesService) { }

  ngOnInit(): void {
    this.listAnimes();
  }
  listAnimes():void{
    this.animeService.getResultsAnime().subscribe(result =>{
      this.animeResult = result;
    });
  }

  onTableDataChange(event:any): void{
    this.page = event;
    this.listAnimes();
  }
  onTableSizeChange(event:any):void {
    this.tableSize = event.target.value;
    this.page = event;
    this.listAnimes();
  }

}
