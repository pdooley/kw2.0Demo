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

import {NgModule}               from '@angular/core';


import {FuseSharedModule}       from '@fuse/shared.module';

import {kwUiFldBoolMod}         from './bool/kwUiFldBoolMod';
import {kwUiFldChkBoxMod}       from './chkBox/kwUiFldChkBoxMod';
import {kwUiFldDateMod}         from './date/kwUiFldDateMod';
import {kwUiFldEmailMod}        from './email/kwUiFldEmailMod';
import {kwUiFldHourMod}         from './hour/kwUiFldHourMod';
import {kwUiFldNumMod}          from './num/kwUiFldNumMod';
import {kwUiFldPhoneMod}        from './phone/kwUiFldPhoneMod';
import {kwUiFldSlctMod}         from './slct/kwUiFldSlctMod';
import {kwUiFldSlctComboMod}    from './slctCombo/kwUiFldSlctComboMod';
import {kwUiFldStrMod}          from './str/kwUiFldStrMod';

import {kwUiFld}                from './kwUiFld';

@NgModule(
{
    declarations:
    [
        kwUiFld,
    ],
    imports:
    [
        FuseSharedModule,

        kwUiFldBoolMod,
        kwUiFldChkBoxMod,
        kwUiFldDateMod,
        kwUiFldEmailMod,
        kwUiFldHourMod,
        kwUiFldNumMod,
        kwUiFldPhoneMod,
        kwUiFldSlctMod,
        kwUiFldSlctComboMod,
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
