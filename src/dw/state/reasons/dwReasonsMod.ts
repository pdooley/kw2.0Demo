//@formatter:off
import {NgModule}               from '@angular/core';

import {dwReasons}                 from './dwReasons';
import {dwReasonsCtrlApi,
        dwReasonsCtrlInit,
        dwReasonsCtrlLoad,
        dwReasonsCtrlPubSub,
        dwReasonsCtrlView}         from './dwReasonsCtrl';


@NgModule(
    {
        imports:
            [
            ],
        declarations:
            [
                dwReasons,

                dwReasonsCtrlApi,
                dwReasonsCtrlInit,
                dwReasonsCtrlLoad,
                dwReasonsCtrlPubSub,
                dwReasonsCtrlView,
            ],
        exports:
            [
                dwReasons,

                dwReasonsCtrlApi,
                dwReasonsCtrlInit,
                dwReasonsCtrlLoad,
                dwReasonsCtrlPubSub,
                dwReasonsCtrlView,
            ]
    })
//@formatter:on
export class dwReasonsMod
{
    constructor()
    {
        //console.log('dwReasonsMod::constructor() called.');
    }
}
