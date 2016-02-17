import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
	selector: 'home-select-city',
	template: '<h3>{{title}}</h3>'
})
export class SelectSchoolComponent implements OnInit {
	title = "Select school";
	constructor(private _router: Router){}
	ngOnInit() {}
}