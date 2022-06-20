//@formatter:off
import {NgModule}                   from '@angular/core';

import {dwEmplPro}                  from './dwEmplPro';
import {dwEmplProCtrlInit,
        dwEmplProCtrlView}          from './dwEmplProCtrl';


@NgModule(
    {
        imports:
            [
            ],
        declarations:
            [
                dwEmplPro,

                dwEmplProCtrlInit,
                dwEmplProCtrlView,
            ],
        exports:
            [
                dwEmplPro,

                dwEmplProCtrlInit,
                dwEmplProCtrlView,
            ]
    })
//@formatter:on
export class dwEmplProMod
{
    constructor()
    {
        //console.log('dwEmplProMod::constructor() called.');
    }
}
