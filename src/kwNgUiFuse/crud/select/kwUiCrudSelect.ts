/**********************************************************************
 *
 * kwNgUi/crud/select/kwUiCrudSelect.ts
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

import {Component}                  from '@angular/core';
import {ViewEncapsulation}          from '@angular/core';
import {MatDialog}                  from '@angular/material';
import {MatDialogRef}               from '@angular/material';

import * as _                       from "lodash";

import {fuseAnimations}             from "@fuse/animations/index";
import {FuseConfirmDialogComponent} from '@fuse/components/confirm-dialog/confirm-dialog.component';

import {kwLog}                      from "@kw/kwLog";
import {kwNgUiCtrlComp}             from "@kwNgUiCtrl/kwNgUiCtrlComp";
import {kwNgPubSub}                 from "@kwNg/pubSub/kwNgPubSub";
import {kwSelect}                   from "@kwUiClass/select/kwSelect";
import {kwState}                    from "@kwClass/state/kwState";
import {kwUitCrudSelect}            from "./kwUitCrudSelect";



const sTAG: string                  = "select";


@Component({
    selector   :    'kw-ui-crud-select',
    templateUrl:    './kwUiCrudSelect.html',
    styleUrls  :    ['./kwUiCrudSelect.scss'],
    encapsulation:  ViewEncapsulation.None,
    animations:     fuseAnimations
})
export class kwUiCrudSelect extends kwNgUiCtrlComp
{

    confirmDlgRef: MatDialogRef<FuseConfirmDialogComponent>;

    bHasSelected: boolean;
    isIndeterminate: boolean;


    sDelMsg: string;

    sTopicSelAll: string;
    sTopicSelDel: string;
    sTopicSelOff: string;
    sTopicSelSel: string;
    sTopicStateDel: string;


    selected: any;


    constructor(
        private pubSub: kwNgPubSub,
        public dlg: MatDialog  )
    {
        super(sTAG);

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

//@formatter:on

    protected initCmp(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "initCmp");
        //console.log(log.called());

        this.selected = [];

        this.createTopicsSel();
        this.createTopicsState();

        this.sub();

        return true;
    }


    protected destroy(): void
    {
        const log: kwLog = new kwLog(this.sClass, "destroy");
        //console.log(log.called());

        this.unSub();

        super.destroy();
    }


    protected navigate(): void
    {
        const log: kwLog = new kwLog(this.sClass, "navigate");
        //console.log(log.called());
    }

    public onChanged($event): void
    {
        const log: kwLog = new kwLog(this.sClass, "onChanged");
        //console.log(log.called());
    }

    protected publish(): void
    {
        const log: kwLog = new kwLog(this.sClass, "publish");
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
    }

    protected parseView(view: any): void
    {
        const log: kwLog = new kwLog(this.sClass, "parseView");
        //console.log(log.called());


        if (!_.isString(this.sState))
        {
            console.error(log.requires("sState"));
            return;
        }


        if (!_.isString(this.sStateSt))
        {
            console.error(log.requires("sStateSt"));
            return;
        }


        if (_.isNull(view))
        {
            console.error(log.invalid("view"));
            return;
        }


        const type: kwUitCrudSelect = <kwUitCrudSelect>view;


        const sDelMsg: string = type.sDelMsg;
        if (_.isString(sDelMsg))
        {
            //console.info(log.is("sDelMsg", sDelMsg));
            this.sDelMsg = sDelMsg;
        }
        else
        {
            console.error(log.requires("sDelMsg"));
            return;
        }

    }


    protected createTopicsSel(): void
    {
        const log: kwLog = new kwLog(this.sClass, "createTopicsSel");
        //console.log(log.called());


        if (!_.isString(this.sState))
        {
            console.error(log.requires("sState"));
            return;
        }
        //console.info(log.is("sState", this.sState));


        const sTopicAll: string = kwSelect.createTopicAll(this.sState);
        if (!_.isString(sTopicAll))
        {
            console.error(log.requires("sTopicAll"));
            return;
        }
        //console.info(log.is("sTopicAll", sTopicAll));
        this.sTopicSelAll = sTopicAll;


        const sTopicDel: string = kwSelect.createTopicDel(this.sState);
        if (!_.isString(sTopicDel))
        {
            console.error(log.requires("sTopicDel"));
            return;
        }
        //console.info(log.is("sTopicDel", sTopicDel));
        this.sTopicSelDel = sTopicDel;


        const sTopicOff: string = kwSelect.createTopicOff(this.sState);
        if (!_.isString(sTopicOff))
        {
            console.error(log.requires("sTopicOff"));
            return;
        }
        //console.info(log.is("sTopicOff", sTopicOff));
        this.sTopicSelOff = sTopicOff;


        const sTopicSel: string = kwSelect.createTopicSel(this.sState);
        if (!_.isString(sTopicSel))
        {
            console.error(log.requires("sTopicSel"));
            return;
        }
        //console.info(log.is("sTopicSel", sTopicSel));
        this.sTopicSelSel = sTopicSel;

    }


    protected createTopicsState(): void
    {
        const log: kwLog = new kwLog(this.sClass, "createTopicsState");
        //console.log(log.called());


        if (!_.isString(this.sStateSt))
        {
            console.error(log.requires("sState"));
            return;
        }
        //console.info(log.is("sState", this.sState));


        const sTopicDel: string = kwState.createTopicDel(this.sStateSt);
        if (!_.isString(sTopicDel))
        {
            console.error(log.requires("sTopicDel"));
            return;
        }
        //console.info(log.is("sTopicDel", sTopicDel));
        this.sTopicStateDel = sTopicDel;

    }


    onAll(): void
    {
        const log: kwLog = new kwLog(this.sClass, "onAll");
        //console.log(log.called());


        if (!_.isString(this.sTopicSelAll))
        {
            console.error(log.invalid("sTopicSelAll"));
            return;
        }
        //console.info(log.is("sTopicSelAll", this.sTopicSelAll));


        if (_.isNull(this.pubSub))
        {
            console.error(log.invalid("pubSub"));
            return;
        }

        this.pubSub.pub(this.sTopicSelAll, {});
    }


    onDel(): void
    {
        const log: kwLog = new kwLog(this.sClass, "onDel");
        //console.log(log.called());


        if (!_.isString(this.sDelMsg))
        {
            console.error(log.invalid("sDelMsg"));
            return;
        }
        //console.info(log.is("sDelMsg", this.sDelMsg));


        this.confirmDlgRef = this.dlg.open(FuseConfirmDialogComponent, {
            disableClose: false
        });


        this.confirmDlgRef.componentInstance.confirmMessage = this.sDelMsg;


        this.confirmDlgRef.afterClosed()
            .subscribe(result => {
                if ( result )
                {
                    this.del();
                }
                this.confirmDlgRef = null;
            });
    }


    onOff(): void
    {
        const log: kwLog = new kwLog(this.sClass, "onOff");
        //console.log(log.called());


        if (!_.isString(this.sTopicSelOff))
        {
            console.error(log.invalid("sTopicSelOff"));
            return;
        }
        //console.info(log.is("sTopicSelOff", this.sTopicSelOff));

        if (_.isNull(this.pubSub))
        {
            console.error(log.invalid("pubSub"));
            return;
        }

        this.pubSub.pub(this.sTopicSelOff, {});
    }


    del(): void
    {
        const log: kwLog = new kwLog(this.sClass, "del");
        //console.log(log.called());


        if (!_.isArray(this.selected))
        {
            console.error(log.invalid("selected"));
            return;
        }

        if (_.isEmpty(this.selected))
        {
            console.error(log.empty("selected"));
            return;
        }

        if (!_.isString(this.sTopicStateDel))
        {
            console.error(log.invalid("sTopicStateDel"));
            return;
        }
        //console.info(log.is("sTopicSelDel", this.sTopicStateDel));


        if (_.isNull(this.pubSub))
        {
            console.error(log.invalid("pubSub"));
            return;
        }

        const that = this;

        _.forEach(this.selected, function (rec, i)
        {
            //console.info(log.isObj("rec"), rec);
            //console.info(log.is("i", i));

            const sId = rec.id;
            if (!_.isString(sId))
            {
                console.error(log.invalid("sId"));
                return;
            }
            //console.info(log.is("sId", sId));

            that.selected.splice(i, 1);

            that.pubSub.pub(that.sTopicStateDel, [sId]);
       });

    }


    private sel(sTopic: string, data: any): void
    {
        const log: kwLog = new kwLog(this.sClass, "sel");
        //console.log(log.called());


        if (!_.isString(sTopic))
        {
            console.error(log.invalid("sTopic"));
            return;
        }


        if (!_.isArray(data))
        {
            console.error(log.invalid("data"));
            return;
        }
        //console.info(log.isObj("data"), data);


        this.selected = data;

        if (this.selected.length > 0)
        {
            this.bHasSelected = true;
        }
        else
        {
            this.bHasSelected = false;
        }

    }

    sub(): void
    {
        const log: kwLog = new kwLog(this.sClass, "sub");
        //console.log(log.called());


        if (_.isNull(this.pubSub))
        {
            console.error(log.invalid("pubSub"));
            return;
        }


        if (!_.isString(this.sTopicSelSel))
        {
            console.error(log.invalid("sTopicSelSel"));
            return;
        }
        //console.info(log.is("sTopicSelSel", this.sTopicSelSel));


        this.pubSub.sub(this.sTopicSelSel, this.sel, this);
    }


    unSub(): void
    {
        const log: kwLog = new kwLog(this.sClass, "unSub");
        //console.log(log.called());


        if (_.isNull(this.pubSub))
        {
            console.error(log.invalid("pubSub"));
            return;
        }


        if (!_.isString(this.sTopicSelSel))
        {
            console.error(log.invalid("sTopicSelSel"));
            return;
        }
        //console.info(log.is("sTopicSelSel", this.sTopicSelSel));


        this.pubSub.unSub(this.sTopicSelSel, this.sel, this);
    }

}
