//@formatter:off
import {NgModule}                   from '@angular/core';

import {dwJobScheds}                from './dwJobScheds';
import {dwJobSchedsCtrlPubSub,
        dwJobSchedsCtrlView}        from './dwJobSchedsCtrl';


@NgModule(
{
    imports:
        [
        ],
    declarations:
        [
            dwJobScheds,

            dwJobSchedsCtrlPubSub,
            dwJobSchedsCtrlView
        ],
    exports:
        [
            dwJobScheds,

            dwJobSchedsCtrlPubSub,
            dwJobSchedsCtrlView
        ]
})
//@formatter:on
export class dwJobSchedsMod
{
    constructor()
    {
        //console.log('dwJobSchedsMod::constructor() called.');
    }
}
