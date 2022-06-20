/**********************************************************************
 *
 * kwNg/srvc/kwSrvcMod.tsts
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
import {NgModule}               from '@angular/core';

import {kwNgSrvcLoad }         from "./load/kwNgSrvcLoad";

@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
    ],
    exports:
    [
    ],
    providers:
    [
        kwNgSrvcLoad
    ]
})
//@formatter:on
export class kwSrvcMod {

    constructor()
    {
        //console.log('kwNgStateMod::constructor() called.');
    }
}
