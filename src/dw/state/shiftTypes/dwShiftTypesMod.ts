//@formatter:off
import {NgModule}                   from '@angular/core';

import {dwShiftTypes}               from './dwShiftTypes';
import {dwShiftTypesCtrlApi,
        dwShiftTypesCtrlInit,
        dwShiftTypesCtrlLoad,
        dwShiftTypesCtrlPubSub,
        dwShiftTypesCtrlView}       from './dwShiftTypesCtrl';


@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        dwShiftTypes,
        dwShiftTypesCtrlApi,
        dwShiftTypesCtrlInit,
        dwShiftTypesCtrlLoad,
        dwShiftTypesCtrlPubSub,
        dwShiftTypesCtrlView,
    ],
    exports:
    [
        dwShiftTypes,
        dwShiftTypesCtrlApi,
        dwShiftTypesCtrlInit,
        dwShiftTypesCtrlLoad,
        dwShiftTypesCtrlPubSub,
        dwShiftTypesCtrlView,
    ]
})
//@formatter:on
export class dwShiftTypesMod
{

    constructor()
    {
        //console.log('dwShiftTypesMod::constructor() called.');
    }
}
