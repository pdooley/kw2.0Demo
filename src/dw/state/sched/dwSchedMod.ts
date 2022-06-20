//@formatter:off
import {NgModule}               from '@angular/core';

import {dwSched}                from './dwSched';
import {dwSchedCtrlInit,
        dwSchedCtrlView}        from './dwSchedCtrl';


@NgModule(
    {
        imports:
            [
            ],
        declarations:
            [
                dwSched,

                dwSchedCtrlInit,
                dwSchedCtrlView,
            ],
        exports:
            [
                dwSched,

                dwSchedCtrlInit,
                dwSchedCtrlView,
            ]
    })
//@formatter:on
export class dwSchedMod
{
    constructor()
    {
        //console.log('dwSchedMod::constructor() called.');
    }
}
