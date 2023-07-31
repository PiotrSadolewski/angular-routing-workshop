import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }

  videoId: number | null = null;


  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.videoId = parseInt(params.get('id') || '0');
      console.log(this.videoId); 
    });
  }
}
