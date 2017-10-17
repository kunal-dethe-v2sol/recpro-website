import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SharedService } from './../shared/service/shared.service';

@Component({
    selector: 'recpro-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

    //Variables
    public loggedInUserData;

    //Constructor parameters
    static get parameters() {
        return [
            SharedService,
            Router,
            ActivatedRoute
        ];
    }


    //Constructor
    constructor(
        private _sharedService,
        private _router,
        private _activatedRoute) {

    }

    //Angular Hooks
    ngOnInit() {
        this.loggedInUserData = this._sharedService.getLoggedInUserData();
    }

    //Custom Methods
}