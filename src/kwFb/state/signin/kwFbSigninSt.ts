
/**********************************************************************
 *
 * kwFb/state/signin/kwFbSigninSt.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst Corporation
 *
 **********************************************************************/

//@formatter:off
import {Injectable}         from "@angular/core";

import {kwBsStVal}          from "@kwBsStat/kwBsStVal";
import {kwFbSignin}         from "@kwFb/class/signin/kwFbSignin";

//@formatter:on

@Injectable({providedIn: 'root'})
export class kwFbSigninStVal extends kwBsStVal
{
    constructor(){super()}
    public get(): kwFbSignin {return <kwFbSignin>super.get()}
}
