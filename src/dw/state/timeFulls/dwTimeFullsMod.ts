//@formatter:off
import {NgModule}                   from '@angular/core';

import {dwTimeFulls}                from './dwTimeFulls';
import {dwTimeFullsCtrlPubSub,
        dwTimeFullsCtrlView}        from './dwTimeFullsCtrl';


@NgModule(
{
    imports:
        [
        ],
    declarations:
        [
            dwTimeFulls,

            dwTimeFullsCtrlPubSub,
            dwTimeFullsCtrlView
        ],
    exports:
        [
            dwTimeFulls,

            dwTimeFullsCtrlPubSub,
            dwTimeFullsCtrlView
        ]
})
//@formatter:on
export class dwTimeFullsMod
{
    constructor()
    {
        //console.log('dwTimeFullsMod::constructor() called.');
    }
}
