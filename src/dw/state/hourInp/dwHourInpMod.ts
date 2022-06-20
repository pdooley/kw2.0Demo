//@formatter:off
import {NgModule}                   from '@angular/core';

import {dwHourInp}                  from './dwHourInp';
import {dwHourInpCtrlView}          from './dwHourInpCtrl';


@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        dwHourInp,

        dwHourInpCtrlView,
    ],
    exports:
    [
        dwHourInp,

        dwHourInpCtrlView,
    ]
})
//@formatter:on
export class dwHourInpMod
{
    constructor()
    {
        //console.log('dwHourInpMod::constructor() called.');
    }
}
