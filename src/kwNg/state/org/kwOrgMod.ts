/**********************************************************************
 *
 * kwNg/state/org/kwOrgMod.ts
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

import {kwOrg}                  from './kwOrg';
import {kwOrgCtrlApi,
        kwOrgCtrlLoad,
        kwOrgCtrlMdl}           from './kwOrgCtrl';


@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        kwOrg,
        kwOrgCtrlApi,
        kwOrgCtrlLoad,
        kwOrgCtrlMdl,
    ],
    exports:
    [
        kwOrg,
        kwOrgCtrlApi,
        kwOrgCtrlLoad,
        kwOrgCtrlMdl,
    ]
})
//@formatter:on
export class kwOrgMod
{
    constructor()
    {
        //console.log('kwOrgMod::constructor() called.');
    }
}
