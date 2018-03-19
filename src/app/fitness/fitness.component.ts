import { Component, OnInit } from '@angular/core';
import { IOpenDataRoot, OpendataService } from '../common/opendata-service.service';

@Component({
  selector: 'app-fitness',
  templateUrl: './fitness.component.html',
  styleUrls: ['./fitness.component.scss']
})
export class FitnessComponent implements OnInit {

  opendata : IOpenDataRoot;
  lat: number = 50;
  lng: number = 50;

  constructor(private _svc : OpendataService) {}

  ngOnInit() {
    this._svc.getOpenDataRoot()
            .subscribe(result => this.opendata = result);
  }

  //De knop map werkt niet omdat opendata lambert coördinaten gebruikt
}
