/**********************************************************************
 *
 * kwNgUiFuse/form/fld/kwUiFldMod.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

import {NgModule }             from '@angular/core';


import {FuseSharedModule }     from '@fuse/shared.module';

import {kwUiFldChkBoxMod }     from './chkBox/kwUiFldChkBoxMod';
import {kwUiFldDateMod }       from './date/kwUiFldDateMod';
import {kwUiFldEmailMod }      from './email/kwUiFldEmailMod';
import {kwUiFldNumMod }        from './num/kwUiFldNumMod';
import {kwUiFldPhoneMod }      from './phone/kwUiFldPhoneMod';
import {kwUiFldStrMod }        from './str/kwUiFldStrMod';

import {kwUiFld }              from './kwUiFld';

@NgModule(
{
    declarations:
    [
        kwUiFld,
    ],
    imports:
    [
        FuseSharedModule,

        kwUiFldChkBoxMod,
        kwUiFldDateMod,
        kwUiFldEmailMod,
        kwUiFldNumMod,
        kwUiFldPhoneMod,
        kwUiFldStrMod,
    ],
    providers:
    [

    ],
    exports:
    [
        kwUiFld
    ]
})
export class kwUiFldMod
{
    constructor()
    {
        //console.log('kwUiCrudMod::constructor() called.');
    }
}
