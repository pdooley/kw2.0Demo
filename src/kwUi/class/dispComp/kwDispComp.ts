/**********************************************************************
 *
 * kwUi/class/disp/kwDisp.ts
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
/*
import {kw}                        from "@kw/kw";

import {kwUiCtrlComp}                    from "@kwCtrl/kwUiCtrlComp";
import {kwDisp}                        from "@kwClass/disp/kwDisp";
import {kwLog}                        from "@kw/kwLog";


export class kwDispComp
{
    protected sClass: string = this.constructor.name;

    constructor(
        private disp:   kwDisp,
        private comp:   kwUiCtrlComp    )
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

//@formatter:on

    init(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "init");
        //console.log(log.called());

        if (!kw.isValid(this.disp))
        {
            console.error(log.invalid("disp"));
            return false;
        }
        //console.info(log.isObj("disp"), this.disp, "]");

        if (!kw.isValid(this.comp))
        {
            console.error(log.invalid("comp"));
            return false;
        }
        //console.info(log.isObj("comp"), this.comp, "]");

     }

    public dispData()
    {
        const log: kwLog = new kwLog(this.sClass, "dispData");
        //console.log(log.called());

        if (!this.disp.dispData())
        {
            return;
        }

        const data = this.comp.getData();
        if (kw.isNull(data))
        {
            //console.info(log.empty("data"));
            return;
        }
        else{console.info(this.sClass, "::dispData() data is [", data, "]");}
    }

    public dispDataId()
    {
        const log: kwLog = new kwLog(this.sClass, "initDisp");
        //console.log(log.called());

        if (!this.disp.dispDataId())
        {
            return;
        }

        const sDataId: string = this.comp.getDataId();
        if (!kw.isString(sDataId))
        {
            //console.info(log.empty("data"));
            return;
        }
        else{console.info(this.sClass, "::dispDataId() sDataId is [", sDataId, "]");}
    }

    public dispFltr()
    {
        const log: kwLog = new kwLog(this.sClass, "initDisp");
        //console.log(log.called());

        if (!this.disp.dispFltr())
        {
            return;
        }

        const fltr = this.comp.getFltr();
        if (kw.isNull(fltr))
        {
            //console.info(log.empty("data"));
            return;
        }
        else{console.info(this.sClass, "::dispFltr() fltr is [", fltr, "]");}
    }

    public dispId()
    {
        const log: kwLog = new kwLog(this.sClass, "initDisp");
        //console.log(log.called());

        if (!this.disp.dispId())
        {
            return;
        }

        const sId = this.comp.getId();
        if (!kw.isString(sId))
        {
            //console.info(log.empty("data"));
            return;
        }
        else{console.info(this.sClass, "::dispId() sId is [", sId, "]");}
    }

    public dispInitId()
    {
        const log: kwLog = new kwLog(this.sClass, "initDisp");
        //console.log(log.called());

        if (!this.disp.dispInitId())
        {
            return;
        }

        const sInitId: string = this.comp.getInitId();
        if (!kw.isString(sInitId))
        {
            //console.info(log.empty("data"));
            return;
        }
        else{console.info(this.sClass, "::dispInitId() sInitId is [", sInitId, "]");}
    }

    public dispInits()
    {
        const log: kwLog = new kwLog(this.sClass, "initDisp");
        //console.log(log.called());

        if (!this.disp.dispInits())
        {
            return;
        }

        const inits = this.comp.getInits();
        if (kw.isNull(inits))
        {
            //console.info(log.empty("data"));
            return;
        }
        else{console.info(this.sClass, "::dispInits() inits is [", inits, "]");}
    }

    public dispLink()
    {
        const log: kwLog = new kwLog(this.sClass, "initDisp");
        //console.log(log.called());

        if (!this.disp.dispLink())
        {
            return;
        }

        const sLink: string = this.comp.getLink();
        if (!kw.isString(sLink))
        {
            //console.info(log.empty("data"));
            return;
        }
        else{console.info(this.sClass, "::dispLink() sLink is [", sLink, "]");}
    }

    public dispLinkId()
    {
        const log: kwLog = new kwLog(this.sClass, "initDisp");
        //console.log(log.called());

        if (!this.disp.dispLinkId())
        {
            return;
        }

        const sLinkId = this.comp.getLinkId();
        if (!kw.isString(sLinkId))
        {
            //console.info(log.empty("data"));
            return;
        }
        else{console.info(this.sClass, "::dispLinkId() sLinkId is [", sLinkId, "]");}
    }


    public dispLinkTmpl()
    {
        const log: kwLog = new kwLog(this.sClass, "initDisp");
        //console.log(log.called());

        if (!this.disp.dispLinkTmpl())
        {
            return;
        }

        const sLinkTmpl = this.comp.getLinkTmpl();
        if (!kw.isString(sLinkTmpl))
        {
            //console.info(log.empty("data"));
            return;
        }
        else{console.info(this.sClass, "::dispLinkTmpl() sLinkTmpl is [", sLinkTmpl, "]");}
    }

    public dispStyle()
    {
        const log: kwLog = new kwLog(this.sClass, "initDisp");
        //console.log(log.called());

        if (!this.disp.dispStyle())
        {
            return;
        }

        const sStyle = this.comp.getStyle();
        if (!kw.isString(sStyle))
        {
            //console.info(log.empty("data"));
            return;
        }
        else{console.info(this.sClass, "::dispStyle() sStyle is [", sStyle, "]");}
    }

    public dispTag()
    {
        const log: kwLog = new kwLog(this.sClass, "initDisp");
        //console.log(log.called());

        if (!this.disp.dispTag())
        {
            return;
        }

        if (kw.isNull(this.view))
        {
            //console.info(log.empty("data"));
            return;
        }

        //console.info(this.sClass, "::dispTag() tag is [", tag, "]");
        this.loadTag();
        if (kw.isNull(this.tag))
        {
            console.error(this.sClass, "::dispTag() error loading tag.");
            return;
        }
        //console.info(this.sClass, "::dispTag() tag is [", tag, "]");

        this.sComp = this.tag.getTag();
        if (!kw.isString(this.sComp))
        {
            console.error(this.sClass, "::dispTag() sComp is invalid.");
        }
        //console.info(this.sClass, "::dispTag() sComp is [", this.sComp, "]");
    }

    public dispText()
    {
        const log: kwLog = new kwLog(this.sClass, "initDisp");
        //console.log(log.called());

        if (!this.disp.dispText())
        {
            return;
        }

        const sText = this.comp.getText();
        if (!kw.isString(sText))
        {
            //console.info(log.empty("data"));
            return;
        }
        else{console.info(this.sClass, "::dispText() sText is [", sText, "]");}
    }

    public dispView()
    {
        const log: kwLog = new kwLog(this.sClass, "initDisp");
        //console.log(log.called());

        if (!this.disp.dispView())
        {
            return;
        }

        const view = this.comp.getView();
        if (kw.isNull(view))
        {
            //console.info(log.empty("data"));
            return;
        }
        else{console.info(this.sClass, "::dispView() view is [", view, "]"); }
    }
}

*/
