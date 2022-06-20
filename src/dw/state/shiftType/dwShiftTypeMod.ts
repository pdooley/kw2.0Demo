//@formatter:off
import {NgModule}                   from '@angular/core';

import {dwShiftType}                 from './dwShiftType';
import {dwShiftTypeCtrlApi,
        dwShiftTypeCtrlInit,
        dwShiftTypeCtrlLoad,
        dwShiftTypeCtrlMap,
        dwShiftTypeCtrlMdl,
        dwShiftTypeCtrlPubSub}        from './dwShiftTypeCtrl';


@NgModule(
    {
        imports:
            [
            ],
        declarations:
            [
                dwShiftType,

                dwShiftTypeCtrlApi,
                dwShiftTypeCtrlInit,
                dwShiftTypeCtrlLoad,
                dwShiftTypeCtrlMap,
                dwShiftTypeCtrlMdl,
                dwShiftTypeCtrlPubSub
            ],
        exports:
            [
                dwShiftType,

                dwShiftTypeCtrlApi,
                dwShiftTypeCtrlInit,
                dwShiftTypeCtrlLoad,
                dwShiftTypeCtrlMap,
                dwShiftTypeCtrlMdl,
                dwShiftTypeCtrlPubSub
            ]
    })
//@formatter:on
export class dwShiftTypeMod
{

    constructor()
    {
        //console.log('dwShiftTypeMod::constructor() called.');
    }
}
