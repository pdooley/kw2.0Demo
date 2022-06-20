//@formatter:off
import {NgModule}                   from '@angular/core';

import {dwEmplTimes}                from './dwEmplTimes';
import {dwEmplTimesCtrlInit,
        dwEmplTimesCtrlPubSub,
        dwEmplTimesCtrlView}        from './dwEmplTimesCtrl';


@NgModule(
{
    imports:
        [
        ],
    declarations:
        [
            dwEmplTimes,

            dwEmplTimesCtrlInit,
            dwEmplTimesCtrlPubSub,
            dwEmplTimesCtrlView
        ],
    exports:
        [
            dwEmplTimes,

            dwEmplTimesCtrlInit,
            dwEmplTimesCtrlPubSub,
            dwEmplTimesCtrlView
        ]
})
//@formatter:on
export class dwEmplTimesMod
{
    constructor()
    {
        //console.log('dwEmplTimesMod::constructor() called.');
    }
}
