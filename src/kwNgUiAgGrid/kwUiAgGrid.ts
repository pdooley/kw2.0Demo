/**********************************************************************
 *
 * kwNgUiGrid/kwUiGrid.scss
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2018 iTKunst corporation
 *
 **********************************************************************/
//@formatter:off
import {Component}              from '@angular/core';
import {ElementRef}             from '@angular/core';
import {ViewChild}              from '@angular/core';
import {ViewEncapsulation}      from '@angular/core';

import * as _                   from 'lodash';

import {MatDialog}              from '@angular/material';


import {ColDef}                 from 'ag-grid-community';
import {ColumnApi}              from 'ag-grid-community';
import {GridApi}                from 'ag-grid-community';

import {fuseAnimations}         from "@fuse/animations/index";

import {kw}                     from "@kw/kw";
import {kwCell}                 from "@kwUiAgGrid/class/cell/kwCell";
import {kwGrid}                 from "@kwUiAgGrid/class/grid/kwGrid";
import {kwLog}                  from "@kw/kwLog";
import {kwNgUiCtrlComp}         from "@kwNgUiCtrl/kwNgUiCtrlComp";
import {kwNgPubSub}             from "@kwNg/pubSub/kwNgPubSub";
import {kwOpts}                 from "@kwUiAgGrid/class/opts/kwOpts";
import {kwDefaultCol}           from "@kwUiAgGrid/class/defaultCol/kwDefaultCol";
import {kwtCellIn}              from "@kwUiAgGrid/class/cell/kwtCellIn";
import {kwtStateInfo}           from "@kwUiAgGrid/class/cols/kwtStateInfo";
import {kwUiCellDlg}            from "@kwNgUiFuse/cellDlg/kwUiCellDlg";
import {kwUiFormDlg}            from "@kwNgUiFuse/formDlg/kwUiFormDlg";


//{field: 'country', valueGetter: (params) => params.data.country.name},
//so we'll make use of the ag-Grid supplied richSelect
/*
{
    field: 'country',
    cellRenderer: (params) => params.data.country.name,
    editable: true,
    cellEditor: 'richSelect',
    cellEditorParams: {
        values: countries,
        cellRenderer: (params) => params.value.name
    }
},
*/
//(cellValueChanged)="onCellValueChanged($event)">

const sTAG: string               = "agGrid";



@Component({
    selector:       'kw-ui-ag-grid',
    templateUrl:    'kwUiAgGrid.html',
    styleUrls:      ['kwUiAgGrid.scss'],
    encapsulation:  ViewEncapsulation.None,
    animations:     fuseAnimations
})
export class kwUiAgGrid extends kwNgUiCtrlComp
{
    @ViewChild('grid', {read: ElementRef, static: false}) public grid;


    public  cols:               ColDef[];
    public  defaultColDef:      kwDefaultCol;
    public  opts:               kwOpts;

    public enableFilter:        boolean;
    public enableSorting:       boolean;
    public rowSelection:        object;
    public suppressRowClickSelection:
                                boolean;


    private sTopicBtnOk:        string;
    private sTopicDlgCell:      string;
    private sTopicDlgEdt:       string;
    private sTopicGridFltr:     string;
    private sTopicRecSave:      string;
    private sTopicStateDel:     string;
    private sTopicStateRdy:     string;
    private sTopicSelAll:       string;
    private sTopicSelOff:       string;
    private sTopicSelSel:       string;

    private colsStateInfo:      kwtStateInfo[];
    private stateMap:           object;

    private api:                GridApi;
    private columnApi:          ColumnApi;
    private dlgRef:             any;


//    private nMinRowHeight:      number = 25;
//    private nCurrRowHeight:     number;



    constructor(
        private dlg: MatDialog,
        private pubSub: kwNgPubSub  )
    {
        super(sTAG);

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());

//        this.nCurrRowHeight = this.nMinRowHeight;
    }


 //   public getRowHeight()
//    {
//       return this.nCurrRowHeight;
//    };

//@formatter:on

    public initCmp(): void
    {
        const log: kwLog = new kwLog(this.sClass, "initCmp");
        //console.log(log.called());

        this.subBtn();
        this.subSel();
        this.subGrid();
        //this.subStateCols();

        //this.pubStateColsAll();

    }


    protected destroy(): void
    {
        const log: kwLog = new kwLog(this.sClass, "destroy");
        //console.log(log.called());

        this.unSubBtn();
        this.unSubSel();
        this.unSubGrid();
        //this.unSubStateCols();

        super.destroy();
    }


    public onChanged($event): void
    {
        const log: kwLog = new kwLog(this.sClass, "onChanged");
        //console.log(log.called());
    }

/*
    public onGridSizeChanged(params)
    {
        const log: kwLog = new kwLog(this.sClass, "onGridSizeChanged");
        //console.log(log.called());

        return;

        const sClass = "ag-body-viewport";
        const elmt: Element = document.getElementsByClassName(sClass)[0];


        const nGridHeight = elmt.clientHeight;
        //console.info(log.isObj("nGridHeight"), nGridHeight);


        const rows = params.api.getRenderedNodes();
        const nRows = rows.length;

        const nHeight = nRows * this.nMinRowHeight;
        //console.info(log.isObj("nHeight"), nHeight);


        if (nHeight >= nGridHeight)
        {
            if (this.nCurrRowHeight !== this.nMinRowHeight)
            {
                this.nCurrRowHeight = this.nMinRowHeight;
                //console.info(log.isObj("nCurrRowHeight"), this.nCurrRowHeight);

                params.api.resetRowHeights();
            }
        }
        else
        {
            this.nCurrRowHeight = Math.floor(nGridHeight / nRows);
            //console.info(log.isObj("nCurrRowHeight"), this.nCurrRowHeight);

            params.api.resetRowHeights();
        }
    }
*/

    public onCellChanged(params: any): void
    {
        const log: kwLog = new kwLog(this.sClass, "onCellChanged");
        //console.log(log.called());

        if (_.isEmpty(params))
        {
            console.error(this.sClass, '::onCellChanged() params is invalid.');
            return;
        }
        //console.info(this.sClass, '::onCellChanged() params is ', params);

        const rec = params.data;
        if (_.isNull(rec))
        {
            console.error(this.sClass, '::onCellChanged() rec is invalid.');
            return;
        }
        //console.info(this.sClass, '::onCellChanged() rec is ', rec);
    }


    public onCellDblClicked(params: any): void
    {
        const log: kwLog = new kwLog(this.sClass, "onCellDblClicked");
        //console.log(log.called());


        if(!this.suppressRowClickSelection)
        {
            return;
        }


        if (_.isEmpty(params))
        {
            console.error(log.invalid("params"));
            return;
        }
        //console.info(log.isObj("params"), params);


        if (!kw.isValid(this.stateMap))
        {
            console.error(log.invalid("stateMap"));
            return;
        }
        //console.info(log.isObj("stateMap"), this.stateMap);


        if (!kw.isValid(this.colsStateInfo))
        {
            console.error(log.invalid("colsStateInfo"));
            return;
        }
        //console.info(log.isObj("colsStateInfo"), this.colsStateInfo);


        let info: kwtCellIn = new kwtCellIn();


        if (_.isNull(params.value))
        {
            console.error(log.invalid("data"));
            return;
        }
        //console.info(log.isObj("data"), params.value);
        info.data = params.value;


        if (_.isNull(params.data))
        {
            console.error(log.invalid("data"));
            return;
        }
        //console.info(log.isObj("data"), params.data);
        info.row = params.data;


        if (!kw.isValid(params.colDef))
        {
            console.error(log.invalid("def"));
            return;
        }
        //console.info(log.isObj("def"), params.colDef);
        info.def = params.colDef;


        //console.info(log.isObj("info"), info);


        const cell = new kwCell(
                            info,
                            this.stateMap,
                            this.colsStateInfo  );
        if (!cell.init())
        {
            console.error(log.errCreate("cell"));
            return;
        }
        //console.info(log.isObj("cell"), cell);


        if (!_.isString(this.sTopicDlgCell))
        {
            console.error(log.invalid("sTopicDlgCell"));
            return;
        }
        //console.info(log.is("sTopicDlgCell", this.sTopicDlgCell));


        this.pubSub.pub(this.sTopicDlgCell, cell);
    }


    public onDelRow(): void
    {
        const log: kwLog = new kwLog(this.sClass, "onDelRow");
        //console.log(log.called());

        //if (!_.isString(this.sIdSelected))
        //{
        //    console.error(this.sClass, '::onDeleteRow() sIdSelected is invalid.')
        //    return;
        //}

        //this.delete(this.sIdSelected);
    }


    public onFilter(sVal): void
    {
        const log: kwLog = new kwLog(this.sClass, "onFilter");
        //console.log(log.called());

        //console.info(log.is("sVal", sVal));

        this.api.setQuickFilter(sVal);
    }


    public onGridError(): void
    {
        const log: kwLog = new kwLog(this.sClass, "onGridError");
        //console.log(log.called());
    }


    public onGridReady(params): void
    {
        const log: kwLog = new kwLog(this.sClass, "onGridReady");
        //console.log(log.called());


        if (_.isNull(params))
        {
            console.error(log.invalid("params"));
            return;
        }
        //console.info(log.isObj("params"), params);


        this.api = params.api;
        if (_.isNull(this.api))
        {
            console.error(log.errLoad("api"));
            return;
        }
        //console.info(log.isObj("api"), this.api);


        this.columnApi = params.columnApi;
        if (_.isNull(this.columnApi))
        {
            console.error(log.errLoad("columnApi"));
            return;
        }
        //console.info(log.isObj("columnApi"), this.columnApi);

        this.api.sizeColumnsToFit();
    }


    public onRowDblClk(params: any): void
    {
        const log: kwLog = new kwLog(this.sClass, "onRowDbleClk");
        //console.log(log.called());


        if(this.suppressRowClickSelection)
        {
            const bSuppress = this.suppressRowClickSelection
            //console.info(log.isObj("bSuppress"), bSuppress);
            return;
        }

        if (_.isEmpty(params))
        {
            console.error(log.invalid("params"));
            return;
        }
        //console.info(log.isObj("params"), params);


        const rec = params.data;
        if (_.isNull(rec))
        {
            console.error(log.invalid("rec"));
            return;
        }
        //console.info(log.isObj("rec"), rec);


        if (!_.isString(this.sTopicDlgEdt))
        {
            console.error(log.invalid("sTopicDlgEdt"));
            return;
        }
        //console.info(log.is("sTopicDlgEdt", this.sTopicDlgEdt));

        this.pubSub.pub(this.sTopicDlgEdt, rec);
    }


    public onSelChanged(params: any): void
    {
        const log: kwLog = new kwLog(this.sClass, "onSelChanged");
        //console.log(log.called());


        if (!_.isString(this.sTopicSelSel))
        {
            console.error(log.invalid("sTopicSelSel"));
            return;
        }
        //console.info(log.is("sTopicSelSel", this.sTopicSelSel));


        if (_.isNull(this.api))
        {
            console.error(log.invalid("api"));
            return;
        }
        //console.info(log.is("api", this.api));


        const sel = this.api.getSelectedRows();
        if (!_.isArray(sel))
        {
            console.error(log.invalid("sel"));
            return;
        }
        //console.info(log.isObj("sel"), sel);


        this.pubSub.pub(this.sTopicSelSel, sel);
    }



    protected parseData(data: any): void
    {
        const log: kwLog = new kwLog(this.sClass, "parseData");
        //console.log(log.called());

        if (kw.isNull(data))
        {
            //console.info(log.empty("data"));
            return;
        }
        //console.info(log.isObj("data"), data);

        if (kw.isNull(this.colsStateInfo))
        {
            //console.info(log.empty("colsStateInfo"));
            return;
        }
        //console.info(log.isObj("colsStateInfo"), this.colsStateInfo);
    }


    protected parseInits(inits: any): void
    {
        const log: kwLog = new kwLog(this.sClass, "parseInits");
        //console.log(log.called());
    }


    protected parseView(view: any): void
    {
        const log: kwLog = new kwLog(this.sClass, "parseView");
        //console.log(log.called());

        if (kw.isNull(view))
        {
            console.error(log.invalid("view"));
            return;
        }


        const grid: kwGrid = new kwGrid(view);
        if (!grid.init())
        {
            console.error(log.errCreate("grid"));
            return;
        }


        const cols = grid.cols;
        if (!_.isArray(cols))
        {
            console.error(log.invalid("cols"));
            return;
        }
        //console.info(log.isObj("cols"), cols);
        this.cols = cols;


        const defaultCol = grid.defaultCol;
        if (!kw.isValid(defaultCol))
        {
            console.error(log.invalid("defaultCol"));
            return;
        }
        //console.info(log.isObj("defaultCol"), defaultCol);
        this.defaultColDef = defaultCol;


        const opts = grid.opts;
        if (!kw.isValid(opts))
        {
            console.error(log.invalid("opts"));
            return;
        }
        //console.info(log.isObj("opts"), opts);
        this.opts = opts;


        this.enableFilter = opts.enableFilter;
        //console.info(log.is("enableFilter", this.enableFilter));

        this.enableSorting = opts.enableSorting;
        //console.info(log.is("enableSorting", this.enableSorting));

        this.suppressRowClickSelection = opts.suppressRowClickSelection;
        //console.info(log.is("suppressRowClickSelection", this.suppressRowClickSelection));


        const sTopicBtnOk = grid.sTopicBtnOk;
        if (!_.isString(sTopicBtnOk))
        {
            console.error(log.invalid("sTopicBtnOk"));
            return;
        }
        //console.info(log.is("sTopicBtnOk", sTopicBtnOk));
        this.sTopicBtnOk = sTopicBtnOk;


        const sTopicDlgEdt = grid.sTopicDlgEdt;
        if (!_.isString(sTopicDlgEdt))
        {
            console.error(log.invalid("sTopicDlgEdt"));
            return;
        }
        //console.info(log.is("sTopicBtnOk", sTopicDlgEdt));
        this.sTopicDlgEdt = sTopicDlgEdt;


        const sTopicDlgCell = grid.sTopicDlgCell;
        if (!_.isString(sTopicDlgCell))
        {
            console.error(log.invalid("sTopicDlgCell"));
            return;
        }
        //console.info(log.is("sTopicDlgCell", sTopicDlgCell));
        this.sTopicDlgCell = sTopicDlgCell;


        const sTopicGridFltr = grid.sTopicGridFltr;
        if (!_.isString(sTopicGridFltr))
        {
            console.error(log.invalid("sTopicGridFltr"));
            return;
        }
        //console.info(log.is("sTopicGridFltr", sTopicGridFltr));
        this.sTopicGridFltr = sTopicGridFltr;


        const sTopicRecSave = grid.sTopicRecSave;
        if (!_.isString(sTopicRecSave))
        {
            console.error(log.invalid("sTopicRecSave"));
            return;
        }
        //console.info(log.is("sTopicRecSave", sTopicRecSave));
        this.sTopicRecSave = sTopicRecSave;


        const sTopicSelAll = grid.sTopicSelAll;
        if (!_.isString(sTopicSelAll))
        {
            console.error(log.invalid("sTopicSelAll"));
            return;
        }
        //console.info(log.is("sTopicSelAll", sTopicSelAll));
        this.sTopicSelAll = sTopicSelAll;


        const sTopicSelOff = grid.sTopicSelOff;
        if (!_.isString(sTopicSelOff))
        {
            console.error(log.invalid("sTopicSelOff"));
            return;
        }
        //console.info(log.is("sTopicSelOff", sTopicSelOff));
        this.sTopicSelOff = sTopicSelOff;


        const sTopicSelSel = grid.sTopicSelSel;
        if (!_.isString(sTopicSelSel))
        {
            console.error(log.invalid("sTopicSelSel"));
            return;
        }
        //console.info(log.is("sTopicSelSel", sTopicSelSel));
        this.sTopicSelSel = sTopicSelSel;


        const sTopicStateDel = grid.sTopicStateDel;
        if (!_.isString(sTopicStateDel))
        {
            console.error(log.invalid("sTopicStateDel"));
            return;
        }
        //console.info(log.is("sTopicStateDel", sTopicStateDel));
        this.sTopicStateDel = sTopicStateDel;


        const sTopicStateRdy = grid.sTopicStateRdy;
        if (!_.isString(sTopicStateRdy))
        {
            console.error(log.invalid("sTopicStateRdy"));
            return;
        }
        //console.info(log.is("sTopicStateRdy", sTopicStateRdy));
        this.sTopicStateRdy = sTopicStateRdy;


        const stateInfo: kwtStateInfo[] = grid.colsStateInfo;
        if (!_.isArray(stateInfo))
        {
            console.error(log.invalid("stateInfo"));
            return;
        }
        //console.info(log.isObj("stateInfo"), stateInfo);
        this.colsStateInfo = stateInfo;


        const stateMap: object = grid.stateMap;
        if (!kw.isValid(stateMap))
        {
            console.error(log.invalid("stateMap"));
            return;
        }
        //console.info(log.isObj("stateMap"), stateMap);
        this.stateMap = stateMap;


        return;
    }



    private del(sId: string): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "del");
        //console.log(log.called());


        if (!_.isString(sId))
        {
            console.error(log.invalid("sId"));
            return false;
        }


        if (!_.isString(this.sTopicStateDel))
        {
            console.error(log.invalid("sTopicStateDel"));
            return false;
        }


        if (_.isNull(this.pubSub))
        {
            console.error(log.invalid("pubSub"));
            return false;
        }

        this.pubSub.pub(this.sTopicStateDel, sId);

        return true;
    }


    private deleteSelectedRows()
    {
        const log: kwLog = new kwLog(this.sClass, "deleteSelectedRows");
        //console.log(log.called());


        if (!kw.isValid(this.api))
        {
            console.error(log.invalid("api"));
            return;
        }
        //console.info(log.isObj("api"), this.api);


        const rows = this.api.getSelectedRows();
        if (!kw.isArray(rows))
        {
            console.error(log.errLoad("rows"));
            return;
        }
        //console.info(log.isObj("rows"), rows);

    }


    private edit(record: object): void
    {
        const log: kwLog = new kwLog(this.sClass, "edit");
        //console.log(log.called());


        this.dlgRef = this.dlg.open(kwUiFormDlg, {
            panelClass: 'form-dialog',
            data: {
                info: record,
                action: 'edit'
            }
        });
    }


    private editCell(cell: object): void
    {
        const log: kwLog = new kwLog(this.sClass, "editCell");
        //console.log(log.called());


        this.dlgRef = this.dlg.open(kwUiCellDlg, {
            panelClass: 'form-dialog',
            data: {
                info: cell,
                action: 'edit'
            }
        });
    }


    public getRowNodeId(params): string
    {
        //console.log("getRowNodeId() called");
        return params.id;
    }


    private isReady(bGo?: boolean): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "isReady");
        //console.log(log.called());

        let bTheGo: boolean = bGo;
        if (!_.isBoolean(bTheGo))
        {
            //bTheGo = this.srvcTrigGo.data;
        }
        if (!_.isBoolean(bTheGo))
        {
            console.error(this.sClass, '::isReady() bTheGo is invalid.');
            return false;
        }
        if (!bTheGo)
        {
            console.error(this.sClass, '::isReady() not yet ready.');
            return false;
        }

        return true;
    }


    private load(sTopic:string, data: object[]): void
    {
        const log: kwLog = new kwLog(this.sClass, "load");
        //console.log(log.called());

        if (!_.isString(sTopic))
        {
            console.error(log.invalid("sTopic"));
            return;
        }

        if (!kw.isValid(data))
        {
            console.error(log.invalid("sTopic"));
            return;
        }
        //console.info(log.isObj(sTopic), data);

        this.storeData(data);
    }


    private loadStateCols(sTopic: string, data: any): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "loadStateCols");
        //console.log(log.called());


        if (!kw.isString(sTopic))
        {
            console.error(log.invalid("sTopic"));
            return false;
        }
        //console.info(log.isObj("sTopic"), sTopic);


        if (!kw.isArray(this.colsStateInfo))
        {
            console.error(log.invalid("colsStateInfo"));
            return false;
        }
        //console.info(log.isObj("colsStateInfo"), this.colsStateInfo);


        const that = this;

        _.forEach(this.colsStateInfo, function(info, i)
        {
            if (!kw.isValid(info))
            {
                console.error(log.invalid("info"));
                return false;
            }
            //console.info(log.isObj("info"), info);

            const type: kwtStateInfo = <kwtStateInfo>info;

            const sRdy = type.sRdy;
            if (!kw.isString(sRdy))
            {
                console.error(log.invalid("sRdy"));
                return false;
            }
            //console.info(log.isObj("sRdy"), sRdy);

            if (sTopic === sRdy)
            {
                info.state = data;
                //console.info(log.isObj("info"), info);
                return;
            }
        });

    }

    private pubStateColsAll(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "pubStateColsAll");
        //console.log(log.called());


        if (!kw.isValid(this.pubSub))
        {
            console.error(log.invalid("pubSub"));
            return;
        }
        //console.info(log.isObj("pubSub"), this.pubSub);


        if (!kw.isArray(this.colsStateInfo))
        {
            console.error(log.invalid("colsStateInfo"));
            return false;
        }
        //console.info(log.is("colsStateInfo", this.colsStateInfo));


        const that = this;

        _.forEach(this.colsStateInfo, function(info, i)
        {
            if (!kw.isValid(info))
            {
                console.error(log.invalid("info"));
                return false;
            }
            //console.info(log.isObj("info"), info);

            const type: kwtStateInfo = <kwtStateInfo>info;

            const sAll = type.sAll;
            if (!kw.isString(sAll))
            {
                console.error(log.invalid("sAll"));
                return false;
            }
            //console.info(log.isObj("sAll"), sAll);

            that.pubSub.pub(sAll);
        });

    }

    private rowsSelected(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "rowsSelected");
        //console.log(log.called());

        if (!kw.isValid(this.api))
        {
            console.error(log.invalid("api"));
            return;
        }
        //console.info(log.isObj("api"), this.api);

        const rows = this.api.getSelectedRows();
        if (!kw.isArray(rows))
        {
            console.error(log.invalid("rows"));
            return;
        }
        //console.info(log.isObj("rows"), rows);

        return rows.length > 0;
    }


    private save(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "save");
        //console.log(log.called());

        if (!_.isString(this.sTopicRecSave))
        {
            console.error(log.invalid("sTopicRecSave"));
            return false;
        }


        if (_.isNull(this.pubSub))
        {
            console.error(log.invalid("pubSub"));
            return false;
        }


        this.pubSub.pub(this.sTopicRecSave);

        return true;
    }


    private selAll(sTopic: string): void
    {
        const log: kwLog = new kwLog(this.sClass, "selAll");
        //console.log(log.called());

        if (!_.isString(sTopic))
        {
            console.error(log.invalid("sTopic"));
            return;
        }
        //console.info(log.is("sTopic", sTopic));


        if (!kw.isValid(this.api))
        {
            console.error(log.invalid("api"));
            return;
        }
        //console.info(log.isObj("api"), this.api);

        this.api.selectAll();

    }


    private selOff(sTopic: string): void
    {
        const log: kwLog = new kwLog(this.sClass, "selOff");
        //console.log(log.called());

        if (!_.isString(sTopic))
        {
            console.error(log.invalid("sTopic"));
            return;
        }
        //console.info(log.is("sTopic", sTopic));


        if (!kw.isValid(this.api))
        {
            console.error(log.invalid("api"));
            return;
        }
        //console.info(log.isObj("api"), this.api);

        this.api.deselectAll();
    }


    private subBtn(): void
    {
        const log: kwLog = new kwLog(this.sClass, "subBtn");
        //console.log(log.called());


        if (!kw.isValid(this.pubSub))
        {
            console.error(log.invalid("pubSub"));
            return;
        }
        //console.info(log.isObj("pubSub"), this.pubSub);


        if (!kw.isString(this.sTopicBtnOk))
        {
            console.error(log.invalid("sTopicBtnOk"));
            return;
        }
        //console.info(log.is("sTopicBtnOk", this.sTopicBtnOk));

        this.pubSub.sub(this.sTopicBtnOk, this.save, this);
    }


    private subSel(): void
    {
        const log: kwLog = new kwLog(this.sClass, "subSel");
        //console.log(log.called());


        if (!kw.isValid(this.pubSub))
        {
            console.error(log.invalid("pubSub"));
            return;
        }
        //console.info(log.isObj("pubSub"), this.pubSub);


        if (!kw.isString(this.sTopicSelAll))
        {
            console.error(log.invalid("sTopicSelOff"));
            return;
        }
        //console.info(log.is("sTopicSelOff", this.sTopicSelOff));


        if (!kw.isString(this.sTopicSelOff))
        {
            console.error(log.invalid("sTopicSelOff"));
            return;
        }
        //console.info(log.is("sTopicSelOff", this.sTopicSelOff));


        this.pubSub.sub(this.sTopicSelAll, this.selAll, this);
        this.pubSub.sub(this.sTopicSelOff, this.selOff, this);
    }


    private subGrid(): void
    {
        const log: kwLog = new kwLog(this.sClass, "subGrid");
        //console.log(log.called());


        if (!kw.isValid(this.pubSub))
        {
            console.error(log.invalid("pubSub"));
            return;
        }
        //console.info(log.isObj("pubSub"), this.pubSub);


        if (!kw.isString(this.sTopicGridFltr))
        {
            console.error(log.invalid("sTopicGridFltr"));
            return;
        }
        //console.info(log.is("sTopicGridFltr", this.sTopicGridFltr));


        this.pubSub.sub(this.sTopicGridFltr, this.onFilter, this);
    }


    private subStateCols(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "subStateCols");
        //console.log(log.called());


        if (!kw.isValid(this.pubSub))
        {
            console.error(log.invalid("pubSub"));
            return false;
        }
        //console.info(log.isObj("pubSub"), this.pubSub);


        if (!kw.isArray(this.colsStateInfo))
        {
            console.error(log.invalid("colsStateInfo"));
            return false;
        }
        //console.info(log.is("colsStateInfo", this.colsStateInfo));


        const that = this;

        _.forEach(this.colsStateInfo, function(info, i)
        {
            if (!kw.isValid(info))
            {
                console.error(log.invalid("info"));
                return false;
            }
            //console.info(log.isObj("info"), info);

            const type: kwtStateInfo = <kwtStateInfo>info;

            const sRdy = type.sRdy;
            if (!kw.isString(sRdy))
            {
                console.error(log.invalid("sRdy"));
                return false;
            }

            that.pubSub.sub(sRdy, that.loadStateCols, that);
        });

    }


    private unSubBtn(): void
    {
        const log: kwLog = new kwLog(this.sClass, "unSubBtn");
        //console.log(log.called());


        if (!kw.isValid(this.pubSub))
        {
            console.error(log.invalid("pubSub"));
            return;
        }
        //console.info(log.isObj("pubSub"), this.pubSub);


        if (!kw.isString(this.sTopicBtnOk))
        {
            console.error(log.invalid("sTopicBtnOk"));
            return;
        }
        //console.info(log.is("sTopicBtnOk", this.sTopicBtnOk));

        this.pubSub.unSub(this.sTopicBtnOk, this.save, this);
    }


    private unSubSel(): void
    {
        const log: kwLog = new kwLog(this.sClass, "unSubSel");
        //console.log(log.called());


        if (!kw.isValid(this.pubSub))
        {
            console.error(log.invalid("pubSub"));
            return;
        }
        //console.info(log.isObj("pubSub"), this.pubSub);


        if (!kw.isString(this.sTopicSelAll))
        {
            console.error(log.invalid("sTopicSelOff"));
            return;
        }
        //console.info(log.is("sTopicSelOff", this.sTopicSelOff));


        if (!kw.isString(this.sTopicSelOff))
        {
            console.error(log.invalid("sTopicSelOff"));
            return;
        }
        //console.info(log.is("sTopicSelOff", this.sTopicSelOff));


        this.pubSub.unSub(this.sTopicSelAll, this.selAll, this);
        this.pubSub.unSub(this.sTopicSelOff, this.selOff, this);
    }


    private unSubGrid(): void
    {
        const log: kwLog = new kwLog(this.sClass, "unSubGrid");
        //console.log(log.called());


        if (!kw.isValid(this.pubSub))
        {
            console.error(log.invalid("pubSub"));
            return;
        }
        //console.info(log.isObj("pubSub"), this.pubSub);


        if (!kw.isString(this.sTopicGridFltr))
        {
            console.error(log.invalid("sTopicGridFltr"));
            return;
        }
        //console.info(log.is("sTopicGridFltr", this.sTopicGridFltr));


        this.pubSub.unSub(this.sTopicGridFltr, this.onFilter, this);
    }


    private unSubStateCols(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "unSubStateCols");
        //console.log(log.called());


        if (!kw.isValid(this.pubSub))
        {
            console.error(log.invalid("pubSub"));
            return false;
        }
        //console.info(log.isObj("pubSub"), this.pubSub);


        if (!kw.isArray(this.colsStateInfo))
        {
            console.error(log.invalid("colsStateInfo"));
            return false;
        }
        //console.info(log.is("colsStateInfo", this.colsStateInfo));


        const that = this;

        _.forEach(this.colsStateInfo, function(info, i)
        {
            if (!kw.isValid(info))
            {
                console.error(log.invalid("info"));
                return false;
            }
            //console.info(log.isObj("info"), info);

            const type: kwtStateInfo = <kwtStateInfo>info;

            const sRdy = type.sRdy;
            if (!kw.isString(sRdy))
            {
                console.error(log.invalid("sRdy"));
                return false;
            }

            that.pubSub.unSub(sRdy, that.loadStateCols, that);
        });

    }

}


