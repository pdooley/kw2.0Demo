//@formatter:off
import {NgModule}                   from '@angular/core';

import {dwTimeSheets}               from './dwTimeSheets';
import {dwTimeSheetsCtrlApi,
        dwTimeSheetsCtrlInit,
        dwTimeSheetsCtrlLoad,
        dwTimeSheetsCtrlPubSub,
        dwTimeSheetsCtrlView}       from './dwTimeSheetsCtrl';


@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        dwTimeSheets,
        dwTimeSheetsCtrlApi,
        dwTimeSheetsCtrlInit,
        dwTimeSheetsCtrlLoad,
        dwTimeSheetsCtrlPubSub,
        dwTimeSheetsCtrlView,
    ],
    exports:
    [
        dwTimeSheets,
        dwTimeSheetsCtrlApi,
        dwTimeSheetsCtrlInit,
        dwTimeSheetsCtrlLoad,
        dwTimeSheetsCtrlPubSub,
        dwTimeSheetsCtrlView,
    ]
})
//@formatter:on
export class dwTimeSheetsMod
{
    constructor()
    {
        //console.log('dwTimeSheetsMod::constructor() called.');
    }
}
