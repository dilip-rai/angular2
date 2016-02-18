import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';

@Component({
	selector: 'home-select-city',
	template: `
		<h3>{{title}}</h3>
		<div>You selected {{city}}</div>
		<button (click)="goBack()">Back</button>
	`
})
export class SelectSchoolComponent implements OnInit {
	title = "Select school";
	city :string;
	constructor(
		private _router: Router,
		private _routeParams: RouteParams){}
	ngOnInit() {
		this.city = this._routeParams.get('city');
		console.log(this.city);
	}
	goBack() {
		 window.history.back()
	}
}