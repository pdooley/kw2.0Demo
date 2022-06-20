/**********************************************************************
 *
 * dw/crud/music/dwpMusic.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2018 Teppen Inc.
 *
 **********************************************************************/
//@formatter:off
import {Component}                  from '@angular/core';
import {ViewEncapsulation}          from '@angular/core';

import {fuseAnimations}             from "@fuse/animations";

import {kwLog}                      from "@kw/kwLog";
import {kwNgUiCtrlPageMsgAll}       from "@kwNgUiCtrl/kwNgUiCtrlPageMsgAll";

import {dwMusicsFctyMsg }        from "@dwState/musics/dwMusicsUtil";
import {dwMusicsStArr }          from "@dwState/musics/dwMusicsSt";
import {dwMusicsStInit }         from "@dwState/musics/dwMusicsSt";
import {dwMusicsStMsg }          from "@dwState/musics/dwMusicsSt";
import {dwMusicsStView }         from "@dwState/musics/dwMusicsSt";


@Component({
    selector:       'dwp-musics',
    templateUrl:    'dwpMusics.html',
    styleUrls:      ['dwpMusics.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class dwpMusics extends kwNgUiCtrlPageMsgAll
{

    constructor(
        srvcInit:   dwMusicsStInit,
        srvcView:   dwMusicsStView,
        srvcData:   dwMusicsStArr,
        srvcFcty:   dwMusicsFctyMsg,
        srvcMsg:    dwMusicsStMsg )
    {
        super(
            srvcInit,
            srvcView,
            srvcData,
            srvcFcty,
            srvcMsg    );

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

//@formatter:on

    public onChanged($event): void
    {
        const log: kwLog = new kwLog(this.sClass, "onChanged");
        //console.log(log.called());
    }

    protected parseData(data: any): void
    {
        const log: kwLog = new kwLog(this.sClass, "parseData");
        //console.log(log.called());
    }

    protected parseInits(inits: any): void
    {
        const log: kwLog = new kwLog(this.sClass, "parseInits");
        //console.log(log.called());

        //console.info(log.isObj("inits"), inits);
    }

    protected parseView(view: any): void
    {
        const log: kwLog = new kwLog(this.sClass, "parseView");
        //console.log(log.called());

        //console.info(log.isObj("view"), view);
    }

}
