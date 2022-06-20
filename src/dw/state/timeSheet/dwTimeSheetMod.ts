//@formatter:off
import {NgModule}                   from '@angular/core';

import {dwTimeSheet}                from './dwTimeSheet';
import {dwTimeSheetCtrlApi,
        dwTimeSheetCtrlInit,
        dwTimeSheetCtrlLoad,
        dwTimeSheetCtrlMap,
        dwTimeSheetCtrlMdl,
        dwTimeSheetCtrlPubSub}        from './dwTimeSheetCtrl';


@NgModule(
    {
        imports:
            [
            ],
        declarations:
            [
                dwTimeSheet,
                dwTimeSheetCtrlApi,
                dwTimeSheetCtrlInit,
                dwTimeSheetCtrlLoad,
                dwTimeSheetCtrlMap,
                dwTimeSheetCtrlMdl,
                dwTimeSheetCtrlPubSub
            ],
        exports:
            [
                dwTimeSheet,
                dwTimeSheetCtrlApi,
                dwTimeSheetCtrlInit,
                dwTimeSheetCtrlLoad,
                dwTimeSheetCtrlMap,
                dwTimeSheetCtrlMdl,
                dwTimeSheetCtrlPubSub
            ]
    })
//@formatter:on
export class dwTimeSheetMod
{

    constructor()
    {
        //console.log('dwTimeSheetMod::constructor() called.');
    }
}
