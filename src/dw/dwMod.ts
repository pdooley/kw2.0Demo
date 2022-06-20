/**********************************************************************
 *
 * dw/dwMod.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 kWunst corporation
 *
 **********************************************************************/

//@formatter:off
import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { dwCompMod }    from './comp/dwCompMod';
import { dwCoreMod }    from './core/dwCoreMod';
import { dwPageMod }    from './page/dwPageMod';
import { dwStateMod }   from './state/dwStateMod';


const routes = [
    {
        path        : 'crud',
        loadChildren: './crud/dwCrudMod#dwCrudMod'
    },
    {
        path        : 'page',
        loadChildren: './page/dwPageMod#dwPageMod'
    },
    {
        path        : 'report',
        loadChildren: './rprt/dwRprtMod#dwRprtMod'
    }
];
@NgModule(
{
    imports:
    [
        RouterModule.forChild(routes),
        dwCompMod,
        dwCoreMod,
        dwPageMod,
        dwStateMod,
    ],
    declarations:
    [

    ],
    exports:
    [

        dwCompMod,
        dwCoreMod,
        dwPageMod,
        dwStateMod,
    ]
})
//@formatter:on

export class dwMod
{
    constructor()
    {
        //console.log('dwMod::constructor() called.');
    }
}

