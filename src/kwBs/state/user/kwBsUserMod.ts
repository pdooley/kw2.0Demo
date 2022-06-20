/**********************************************************************
 *
 * kwBs/state/user/kwBsUserMod.ts
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
import {NgModule}               from '@angular/core';

import {kwBsUser}               from './kwBsUser';
import {kwBsUserCtrlLoad}       from './kwBsUserCtrl';


@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        kwBsUser,
        kwBsUserCtrlLoad,
    ],
    exports:
    [
        kwBsUser,
        kwBsUserCtrlLoad,
    ]
})
//@formatter:on
export class kwBsUserMod
{
    constructor()
    {
        //console.log('kwBsUserMod::constructor() called.');
    }
}
