/**********************************************************************
 *
 * kwBs/state/autoLogin/kwBsAutoLoginSt.ts
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
import {kwBsStSmpl }       from "@kwBs/stat/kwBsStSmpl";
//@formatter:on


export class kwBsAutoLoginStSmpl extends kwBsStSmpl
{
    constructor(){super()}
    public autoLogin(): boolean {return <boolean>this.get()}
}
