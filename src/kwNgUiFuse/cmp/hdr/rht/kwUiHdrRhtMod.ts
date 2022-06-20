/**********************************************************************
 *
 * kw/kwUiHdrRhtMod.ts
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

import {kwUiBtnMod} from '@kwNgUiFuseCmp/btn/kwUiBtnMod';
import {kwUiImgMod} from '@kwNgUiFuseCmp/img/kwUiImgMod';
import {kwUiTitleMod} from '@kwNgUiFuseCmp/title/kwUiTitleMod';

import {kwUiHdrRht} from './kwUiHdrRht';

@NgModule(
    {
        imports:
            [
                kwUiCoreMod,

                kwUiBtnMod,
                kwUiImgMod,
                kwUiTitleMod,
            ],
        declarations:
            [
                kwUiHdrRht,
            ],
        providers:
            [],
        exports:
            [
                kwUiHdrRht,
            ]
    })
//@formatter:on
export class kwUiHdrRhtMod {

}
