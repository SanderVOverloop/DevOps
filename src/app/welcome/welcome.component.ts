import { Component, OnInit } from '@angular/core';
import * as _ from "lodash";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  imageUrl : string = "https://scontent.fbru2-1.fna.fbcdn.net/v/t1.0-9/11149396_10204481552578859_2606369580399780188_n.jpg?oh=c246e54a78c2c030aaad1867bc1cd646&oe=5ABA50E6";
  images: number[] = [1,2,4,6,10,26,45,77,99,102,133];
  private _nr : number = 1;

  constructor() { }

  //Methode1
  /*ngOnInit() {
    setInterval(() => {
    //debugger;
    let nr = _.random(1,133);
    this.imageUrl = `https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(${nr}).jpg`;
    }, 2000);
  }*/

  //Methode2
  ngOnInit() {
    //this.SetImage();
    //setInterval(this.ChangeImage, 5000);
  }

  ChangeImage = () => {
    //debugger;
    //this._nr = _.random(1,133);
    this._nr = this.images[_.random(0,this.images.length - 1)];
    this.SetImage()
  }

  get imageNr(){
    return this._nr;
  }
  set imageNr(value: number){
    this._nr = value;
    this.SetImage()
  }

  SetImage(){
    this.imageUrl = `https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(${this._nr}).jpg`;
  }
}
