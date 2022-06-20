/**********************************************************************
 *
 * kw/kwUiPageMod.ts
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
import {NgModule}           from '@angular/core';

import {kwUiCoreMod}        from '@kwNgUiFuse/core/kwUiCoreMod';

import {kwUiBdyMod}         from '@kwNgUiFuseCmp/bdy/kwUiBdyMod';
import {kwUiCrudMod}        from '../crud/kwUiCrudMod';
import {kwUiFormMod}        from '../form/kwUiFormMod';
import {kwUiFtrMod}         from '@kwNgUiFuseCmp/ftr/kwUiFtrMod';
import {kwUiHdrMod}         from '@kwNgUiFuseCmp/hdr/kwUiHdrMod';
import {kwUiUtilMod}        from '@kwNgUiFuseCmp/util/kwUiUtilMod';

import {kwUiPage}           from './kwUiPage';


@NgModule(
    {
        imports:
            [
                kwUiCoreMod,

                kwUiBdyMod,
                kwUiCrudMod,
                kwUiFormMod,
                kwUiFtrMod,
                kwUiHdrMod,
                kwUiUtilMod,
            ],
        declarations:
            [
                kwUiPage,
            ],
        providers:
            [],
        exports:
            [
                kwUiPage,
            ]
    })
//@formatter:on
export class kwUiPageMod {

}
