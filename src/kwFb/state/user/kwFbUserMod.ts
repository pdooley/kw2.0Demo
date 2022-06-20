/**********************************************************************
 *
 * kwFb/state/user/kwFbUserMod.ts
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
import {NgModule}                 from '@angular/core';

import {kwFbUser}               from './kwFbUser';
import {kwFbUserCtrlVal}        from './kwFbUserCtrlVal';


@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        kwFbUser,
        kwFbUserCtrlVal
    ],
    exports:
    [
        kwFbUser,
        kwFbUserCtrlVal,
    ],
    providers:
    [
    ]
})
//@formatter:on
export class kwFbUserMod
{

    constructor()
    {
        //console.log('kwFbUserMod::constructor() called.');
    }
}
