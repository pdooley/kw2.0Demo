//@formatter:off
import {Component}          from '@angular/core';

import {kwFbCtrlAjax}       from "@kwFbCtrl/kwFbCtrlAjax";
import {kwNgCtrlPubSubAll}  from "@kwNgCtrl/kwNgCtrlPubSubAll";
import {kwNgCtrlSubApi}     from "@kwNgCtrl/kwNgCtrlSubApi";
import {kwNgUiCtrlSubInit}  from "@kwNgUiCtrl/kwNgUiCtrlSubInit";
import {kwNgUiCtrlSubView}  from "@kwNgUiCtrl/kwNgUiCtrlSubView";

import {dwMusicsFctyMsg}  from "./dwMusicsUtil";
import {dwMusicsStApi,
        dwMusicsStArr,
        dwMusicsStInit,
        dwMusicsStMsg,
        dwMusicsStView}   from "./dwMusicsSt";


const sSTATE: string        = "musics";
//@formatter:off


@Component({selector: 'dw-musics-ctrl-api',template: ``})
export class dwMusicsCtrlApi extends kwNgCtrlSubApi
{
    constructor(api: dwMusicsStApi)
    {super(api, sSTATE)}
}


@Component({selector: 'dw-musics-ctrl-init', template: ``})
export class dwMusicsCtrlInit extends kwNgUiCtrlSubInit
{
    constructor(init:  dwMusicsStInit)
    {super(init, sSTATE)}
}


@Component({selector: 'dw-musics-ctrl-load',template: ``})
export class dwMusicsCtrlLoad extends kwFbCtrlAjax
{
    constructor(msg: dwMusicsStMsg, data: dwMusicsStArr)
    {super(msg, data, sSTATE)}
}


@Component({selector: 'dw-musics-ctrl-pub-sub', template: ``})
export class dwMusicsCtrlPubSub extends kwNgCtrlPubSubAll
{
    constructor(fcty: dwMusicsFctyMsg, msg: dwMusicsStMsg)
    {super(fcty, msg, sSTATE)}
}


@Component({selector: 'dw-musics-ctrl-view', template: ``})
export class dwMusicsCtrlView extends kwNgUiCtrlSubView
{
    constructor(view: dwMusicsStView)
    {super(view, sSTATE)}
}
