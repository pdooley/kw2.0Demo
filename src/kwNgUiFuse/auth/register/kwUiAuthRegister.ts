/**********************************************************************
 *
 * kwNgUiFuse/auth/register/kwUiAuthRegister.ts
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

import {fadeInAnim} from "@kwNgUiFuseCmp/fadeIn/kwUiFadeIn";

//@formatter:on


@Component({
    selector: 'kw-ui-auth-register',
    templateUrl: './kwUiAuthRegister.html',
    styleUrls: ['./kwUiAuthRegister.scss'],
    host: {
        '[@fadeInAnim]': 'true'
    },
    animations: [fadeInAnim]
})
export class kwUiAuthRegister implements OnInit {

    username: string = "Patrick Dooley";

    constructor(private router: Router) {
        //console.log("kwUiAuthRegister::constructor() called");
    }

    ngOnInit() {
        //console.log("kwUiAuthRegister::ngOnInit() called");
    }

    send() {
        //console.log("kwUiAuthRegister::send() called");
        this.router.navigate(['/']);
    }

}
