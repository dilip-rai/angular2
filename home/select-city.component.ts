import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {City} from './city'

@Component({
	selector: 'home-select-city',
	templateUrl: 'home/select-city.component.html',
	styleUrls: ['home/select-city.component.css']
})
export class SelectCityComponent implements OnInit {
	title = "Select city";
	cities: City[] = [
		{"id": 1, "name": "Bengaluru"},
		{"id": 2, "name": "Mysuru"},
		{"id": 3, "name": "Hyderabad"},
		{"id": 4, "name": "Chennai"},
		{"id": 5, "name": "Mumbai"},
		{"id": 6, "name": "Tumkuru"},
		{"id": 7, "name": "New Delhi"},
		{"id": 8, "name": "Bhopal"},
		{"id": 9, "name": "Chandigarh"},
		{"id": 10, "name": "Patiala"}
	];
	constructor(private _router: Router){}
	ngOnInit() {}
	gotoCity(city:City) {
		let link = ['SelectSchool', {id: city.id}];
		this._router.navigate(link);
	}
}