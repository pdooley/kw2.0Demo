/**********************************************************************
 *
 * kw/kwUiImgMod.ts
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

import {kwUiIconMod} from '@kwNgUiFuseCmp/icon/kwUiIconMod';
import {kwUiLogoMod} from '@kwNgUiFuseCmp/logo/kwUiLogoMod';
import {kwUiSvgMod} from '@kwNgUiFuseCmp/svg/kwUiSvgMod';
import {kwUiSvgRawMod} from '@kwNgUiFuseCmp/svgRaw/kwUiSvgRawMod';

import {kwUiImg} from './kwUiImg';

@NgModule(
    {
        imports:
            [
                kwUiCoreMod,

                kwUiIconMod,
                kwUiLogoMod,
                kwUiSvgMod,
                kwUiSvgRawMod,
            ],
        declarations:
            [
                kwUiImg,
            ],
        providers:
            [],
        exports:
            [
                kwUiImg,
            ]
    })
//@formatter:on
export class kwUiImgMod {

}
