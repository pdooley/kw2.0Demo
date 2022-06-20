/**********************************************************************
 *
 * kwNgUiFuse/auth/verify/kwUiAuthVerify.ts
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
    selector: 'kw-ui-auth-verify',
    templateUrl: './kwUiAuthVerify.html',
    styleUrls: ['./kwUiAuthVerify.scss'],
    host: {
        '[@fadeInAnim]': 'true'
    },
    animations: [fadeInAnim]
})
export class kwUiAuthVerify implements OnInit {

    username: string = "Patrick Dooley";

    constructor(private router: Router) {
        //console.log("kwUiAuthVerify::constructor() called");
    }

    ngOnInit() {
        //console.log("kwUiAuthVerify::ngOnInit() called");
    }

    send() {
        //console.log("kwUiAuthVerify::send() called");
        this.router.navigate(['/']);
    }

}
