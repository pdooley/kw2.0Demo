/**********************************************************************
 *
 * kwNgUiFuse/auth/forgot/kwUiAuthForgot.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

//@formatter:off
import {Component} from '@angular/core';
import {OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {fadeInAnim} from '@kwNgUiFuseCmp/fadeIn/kwUiFadeIn';

//@formatter:on


@Component({
    selector: 'kw-ui-auth-forgot',
    templateUrl: './kwUiAuthForgot.html',
    styleUrls: ['./kwUiAuthForgot.scss'],
    host: {
        '[@fadeInAnim]': 'true'
    },
    animations: [fadeInAnim]
})
export class kwUiAuthForgot implements OnInit {

    email: string;
    password: string;

    constructor(private router: Router) {
        //console.log("kwUiAuthForgot::constructor() called");
    }

    ngOnInit() {
        //console.log("kwUiAuthForgot::ngOnInit() called");
    }

    send() {
        //console.log("kwUiAuthForgot::send() called");
        this.router.navigate(['/']);
    }

}
