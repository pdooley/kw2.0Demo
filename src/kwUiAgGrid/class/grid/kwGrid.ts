/**********************************************************************
 *
 * kwUiAgGrid/class/grid/kwGrid.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst Corporation
 *
 **********************************************************************/

//@formatter:off
import * as _                   from "lodash";

import {ColDef}                 from 'ag-grid-community';

import {kw}                     from "@kw/kw";
import {kwBtn}                  from "@kwUiClass/btn/kwBtn";
import {kwCols}                 from "../cols/kwCols";
import {kwDefaultCol}           from "../defaultCol/kwDefaultCol";
import {kwDlg}                  from "@kwUiClass/dlg/kwDlg";
import {kwLog}                  from "@kw/kwLog";
import {kwOpts}                 from "../opts/kwOpts";
import {kwRec}                  from "@kwUiClass/rec/kwRec";
import {kwSelect}               from "@kwUiClass/select/kwSelect";
import {kwState}                from "@kwClass/state/kwState";
import {kwtGridIn}              from "./kwtGridIn";
import {kwtOpts}                from "../opts/kwtOpts";
import {kwtStateInfo}           from "../cols/kwtStateInfo";
//@formatter:on


const sTAG_GRID_FLTR: string      = "GrdFltr";


export class kwGrid
{
    protected sClass: string = this.constructor.name;


    private grid:                   kwtGridIn;
    private stateCols:              string[];

    private sState:                 string;
    private sStateSt:               string;

    private _cols:                  ColDef[];
    private _colsStateInfo:         kwtStateInfo[];
    private _defaultCol:            kwDefaultCol;
    private _opts:                  kwOpts;
    private _stateMap:              object;


    private _sTopicBtnOk:           string;
    private _sTopicDlgCell:         string;
    private _sTopicDlgEdt:          string;
    private _sTopicRecSave:         string;
    private _sTopicStateDel:        string;
    private _sTopicStateRdy:        string;
    private _sTopicSelAll:          string;
    private _sTopicSelOff:          string;
    private _sTopicSelSel:          string;

    private _sTopicGridFltr:        string;

    public get cols():              ColDef[]        {return this._cols}
    public get colsStateInfo():     kwtStateInfo[]  {return this._colsStateInfo}
    public get defaultCol():        kwDefaultCol    {return this._defaultCol}
    public get opts():              kwOpts          {return this._opts}
    public get stateMap():          object          {return this._stateMap}
    public get sTopicBtnOk():       string          {return this._sTopicBtnOk}
    public get sTopicDlgCell():     string          {return this._sTopicDlgCell}
    public get sTopicDlgEdt():      string          {return this._sTopicDlgEdt}
    public get sTopicGridFltr():    string          {return this._sTopicGridFltr}
    public get sTopicRecSave():     string          {return this._sTopicRecSave}
    public get sTopicStateDel():    string          {return this._sTopicStateDel}
    public get sTopicStateRdy():    string          {return this._sTopicStateRdy}
    public get sTopicSelAll():      string          {return this._sTopicSelAll}
    public get sTopicSelOff():      string          {return this._sTopicSelOff}
    public get sTopicSelSel():      string          {return this._sTopicSelSel}


    static createTopicFltr(sState: string): string
    {
        const log: kwLog = new kwLog("kwGrid", "createTopicFltr");
        //console.log(log.called());

        if (!kw.isString(sState))
        {
            console.error(log.invalid("sState"));
            return null;
        }

        return sState + sTAG_GRID_FLTR;
    }

    constructor(
        private info: object  )
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());

     }


    init(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "init");
        //console.log(log.called());

        if (kw.isNull(this.info))
        {
            console.error(log.invalid("info"));
            return false;
        }
        //console.info(log.isObj("info"), this.info);

        this.grid = <kwtGridIn>this.info;


        this.sState = this.grid.sState;
        if (!_.isString(this.sState))
        {
            console.error(log.requires("sState"));
            return false;
        }


        this.sStateSt = this.grid.sStateSt;
        if (!_.isString(this.sStateSt))
        {
            console.error(log.requires("sStateSt"));
            return false;
        }


        if (!this.createTopicsBtn())
        {
            console.error(log.errCreate("topicsBtn"));
            return false;
        }


        if (!this.createTopicsDlg())
        {
            console.error(log.errCreate("topicsDlg"));
            return false;
        }


        if (!this.createTopicsGrid())
        {
            console.error(log.errCreate("topicsGrid"));
            return false;
        }


        if (!this.createTopicsRec())
        {
            console.error(log.errCreate("topicsRec"));
            return false;
        }


        if (!this.createTopicsSel())
        {
            console.error(log.errCreate("topicsSel"));
            return false;
        }


        if (!this.createTopicsState())
        {
            console.error(log.errCreate("topicsState"));
            return false;
        }


        if (!this.createCols())
        {
            console.error(log.errCreate("cols"));
            return false;
        }


        if (!this.createDefaultCols())
        {
            console.error(log.errCreate("defaultCols"));
            return false;
        }


        if (!this.createOpts())
        {
            console.error(log.errCreate("opts"));
            return false;
        }

        return true;
    }


    createDefaultCols(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "createDefaultCols");
        //console.log(log.called());


        if (kw.isNull(this.grid))
        {
            console.error(log.invalid("grid"));
            return false;
        }
        //console.info(log.isObj("grid"), this.grid);


        const defIn: object = this.grid.defaultCol;
        if (!kw.isValid(defIn))
        {
            console.error(log.requires("defaultCol"));
            return false;
        }
        //console.info(log.isObj("defaultCols"), defIn);


        const def = new kwDefaultCol(defIn);
        if (!def.init())
        {
            console.error(log.errCreate("def"));
            return false;
        }
        //console.info(log.isObj("def"), def);

        this._defaultCol = def;

        return true;
    }


    createCols(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "createCols");
        //console.log(log.called());


        if (kw.isNull(this.grid))
        {
            console.error(log.invalid("grid"));
            return false;
        }
        //console.info(log.isObj("grid"), this.grid);


        const colsIn: object[] = this.grid.cols;
        if (!_.isArray(colsIn))
        {
            console.error(log.requires("cols"));
            return false;
        }
        //console.info(log.isObj("colsIn"), colsIn);


        const cols = new kwCols(colsIn);
        if (!cols.init())
        {
            console.error(log.errCreate("cols"));
            return false;
        }
        //console.info(log.isObj("cols"), cols);


        const types = cols.types;
        if (!_.isArray(types))
        {
            console.error(log.invalid("types"));
            return false;
        }
        //console.info(log.isObj("types"), types);
        this._cols = types;


        const stateInfo: kwtStateInfo[] = cols.stateInfo;
        if (!kw.isArray(stateInfo))
        {
            console.error(log.invalid("stateInfo"));
            return false;
        }
        //console.info(log.isObj("stateInfo"), stateInfo);
        this._colsStateInfo = stateInfo;


        const stateMap: object = cols.stateMap;
        if (!kw.isValid(stateMap))
        {
            console.error(log.invalid("stateMap"));
            return false;
        }
        //console.info(log.isObj("stateMap"), stateMap);
        this._stateMap = stateMap;


        return true;
    }


    createOpts(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "createOpts");
        //console.log(log.called());


        if (kw.isNull(this.grid))
        {
            console.error(log.invalid("grid"));
            return false;
        }
        //console.info(log.isObj("grid"), this.grid);


        const optsIn: object = this.grid.opts;
        if (_.isNull(optsIn))
        {
            console.error(log.requires("optsIn"));
            return false;
        }
        //console.info(log.isObj("optsIn"), optsIn);


        const opts: kwOpts = new kwOpts(optsIn);
        if (!opts.init())
        {
            console.error(log.errCreate("opts"));
            return false;
        }
        //console.info(log.isObj("opts"), opts);
        this._opts = opts;

        return true;
    }


    private createTopicsBtn(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "createTopicsBtn");
        //console.log(log.called());


        if (!kw.isString(this.sState))
        {
            console.error(log.invalid("sState"));
            return false;
        }
        //console.info(log.is("sState", this.sState));


        const sTopicOk = kwBtn.createTopicOk(this.sState);
        if (!kw.isString(sTopicOk))
        {
            console.error(log.invalid("sTopicOk"));
            return false;
        }
        //console.info(log.is("sTopicOk", sTopicOk));
        this._sTopicBtnOk = sTopicOk;

        return true;
    }



    private createTopicsDlg(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "createTopicsDlg");
        //console.log(log.called());


        if (!kw.isString(this.sState))
        {
            console.error(log.invalid("sState"));
            return false;
        }
        //console.info(log.isObj("sState"), this.sState);


        const sTopicDlgEdt = kwDlg.createTopicEdt(this.sState);
        if (!_.isString(sTopicDlgEdt))
        {
            console.error(log.invalid("sTopicDlgEdt"));
            return false;
        }
        //console.info(log.isObj("sTopicDlgEdt"), sTopicDlgEdt);
        this._sTopicDlgEdt = sTopicDlgEdt;


        const sTopicDlgCell = kwDlg.createTopicCell(this.sState);
        if (!_.isString(sTopicDlgCell))
        {
            console.error(log.invalid("sTopicDlgCell"));
            return false;
        }
        //console.info(log.isObj("sTopicDlgCell"), sTopicDlgCell);
        this._sTopicDlgCell = sTopicDlgCell;

        return true;
    }


    private createTopicsGrid(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "createTopicsGrid");
        //console.log(log.called());


        if (!kw.isString(this.sState))
        {
            console.error(log.invalid("sState"));
            return false;
        }
        //console.info(log.isObj("sState"), this.sState);


        const sTopicFltr = kwGrid.createTopicFltr(this.sState);
        if (!_.isString(sTopicFltr))
        {
            console.error(log.invalid("sTopicFltr"));
            return false;
        }
        //console.info(log.isObj("sTopicFltr"), sTopicFltr);
        this._sTopicGridFltr = sTopicFltr;

        return true;
    }



    private createTopicsRec(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "createTopicsRec");
        //console.log(log.called());


        if (!kw.isString(this.sState))
        {
            console.error(log.invalid("sState"));
            return false;
        }
        //console.info(log.is("sState", this.sState));


        const sTopicSave = kwRec.createTopicSave(this.sState);
        if (!kw.isString(sTopicSave))
        {
            console.error(log.invalid("sTopicSave"));
            return false;
        }
        //console.info(log.is("sTopicSave", sTopicSave));
        this._sTopicRecSave = sTopicSave;

        return true;
    }


    private createTopicsSel(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "createTopicsSel");
        //console.log(log.called());


        if (!kw.isString(this.sState))
        {
            console.error(log.invalid("sState"));
            return false;
        }
        //console.info(log.is("sState", this.sState));


        const sTopicAll = kwSelect.createTopicAll(this.sState);
        if (!kw.isString(sTopicAll))
        {
            console.error(log.invalid("sTopicAll"));
            return false;
        }
        //console.info(log.is("sTopicAll", sTopicAll));
        this._sTopicSelAll = sTopicAll;


        const sTopicOff = kwSelect.createTopicOff(this.sState);
        if (!kw.isString(sTopicOff))
        {
            console.error(log.invalid("sTopicOff"));
            return false;
        }
        //console.info(log.is("sTopicOff", sTopicOff));
        this._sTopicSelOff = sTopicOff;


        const sTopicSel = kwSelect.createTopicSel(this.sState);
        if (!kw.isString(sTopicSel))
        {
            console.error(log.invalid("sTopicSel"));
            return false;
        }
        //console.info(log.is("sTopicSel", sTopicSel));
        this._sTopicSelSel = sTopicSel;

        return true;
    }



    private createTopicsState(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "createTopicsState");
        //console.log(log.called());


        if (!kw.isString(this.sStateSt))
        {
            console.error(log.invalid("sStateSt"));
            return false;
        }
        //console.info(log.is("sStateSt", this.sStateSt));


        const sTopicDel = kwState.createTopicDel(this.sStateSt);
        if (!kw.isString(sTopicDel))
        {
            console.error(log.invalid("sTopicDel"));
            return false;
        }
        //console.info(log.is("sTopicDel", sTopicDel));
        this._sTopicStateDel = sTopicDel;


        const sTopicRdy = kwState.createTopicRdy(this.sStateSt);
        if (!kw.isString(sTopicRdy))
        {
            console.error(log.invalid("sTopicRdy"));
            return false;
        }
        //console.info(log.is("sTopicRdy", sTopicRdy));
        this._sTopicStateRdy = sTopicRdy;

        return true;
    }


    toString(): string
    {
        return this.constructor.name;
    }


    static is(obj: object): boolean
    {
        return kw.is(obj, kwGrid)
    }

}

