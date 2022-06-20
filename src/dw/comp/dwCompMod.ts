//@formatter:off
import { NgModule }         from '@angular/core';
import { CommonModule }     from '@angular/common';

import { dwCoreMod }        from '../core/dwCoreMod';

@NgModule(
{
  imports:
  [
    CommonModule,
    dwCoreMod,
  ],
     declarations:
    [
    ],
    exports:
    [
    ]
})
//@formatter:on
export class dwCompMod {

    constructor()
    {
        //console.log('dwCompMod::constructor() called');
    }
}
