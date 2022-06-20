//@formatter:off
import {NgModule}                   from '@angular/core';

import {dwMusic}                  from './dwMusic';
import {dwMusicCtrlApi,
        dwMusicCtrlInit,
        dwMusicCtrlLoad,
        dwMusicCtrlMap,
        dwMusicCtrlMdl,
        dwMusicCtrlPubSub}        from './dwMusicCtrl';


@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        dwMusic,
        dwMusicCtrlApi,
        dwMusicCtrlInit,
        dwMusicCtrlLoad,
        dwMusicCtrlMap,
        dwMusicCtrlMdl,
        dwMusicCtrlPubSub
    ],
    exports:
    [
        dwMusic,
        dwMusicCtrlApi,
        dwMusicCtrlInit,
        dwMusicCtrlLoad,
        dwMusicCtrlMap,
        dwMusicCtrlMdl,
        dwMusicCtrlPubSub
    ]
})
//@formatter:on
export class dwMusicMod
{
    constructor()
    {
        //console.log('dwMusicMod::constructor() called.');
    }
}
