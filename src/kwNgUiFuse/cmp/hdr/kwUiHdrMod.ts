/**********************************************************************
 *
 * kw/kwUiHdrMod.ts
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
import {NgModule} from '@angular/core';

import {kwUiCoreMod} from '@kwNgUiFuse/core/kwUiCoreMod';

import {kwUiHdrCtrMod} from './ctr/kwUiHdrCtrMod';
import {kwUiHdrLftMod} from './lft/kwUiHdrLftMod';
import {kwUiHdrRhtMod} from './rht/kwUiHdrRhtMod';

import {kwUiHdr} from './kwUiHdr';

@NgModule(
    {
        imports:
            [
                kwUiCoreMod,

                kwUiHdrCtrMod,
                kwUiHdrLftMod,
                kwUiHdrRhtMod,
            ],
        declarations:
            [
                kwUiHdr,
            ],
        providers:
            [],
        exports:
            [
                kwUiHdr,
            ]
    })
//@formatter:on
export class kwUiHdrMod {

}
