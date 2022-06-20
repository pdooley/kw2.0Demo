/**********************************************************************
 *
 * kwUiAgGrid/fcty/col/kwFctyCol.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

//@formatter:on
import {kw}                     from '@kw/kw';
import {kwCol}                  from "@kwUiAgGrid/class/col/kwCol";
import {kwColAvatar}            from "@kwUiAgGrid/class/col/kwColAvatar";
import {kwColBool}              from "@kwUiAgGrid/class/col/kwColBool";
import {kwColChkBox}            from "@kwUiAgGrid/class/col/kwColChkBox";
import {kwColDate}              from "@kwUiAgGrid/class/col/kwColDate";
import {kwColHour}              from "@kwUiAgGrid/class/col/kwColHour";
import {kwColName}              from "@kwUiAgGrid/class/col/kwColName";
import {kwColNum}               from "@kwUiAgGrid/class/col/kwColNum";
import {kwColPhone}             from "@kwUiAgGrid/class/col/kwColPhone";
import {kwColRowSel}            from "@kwUiAgGrid/class/col/kwColRowSel";
import {kwColSrvc}              from "@kwUiAgGrid/class/col/kwColSrvc";
import {kwColSlct}              from "@kwUiAgGrid/class/col/kwColSlct";
import {kwColStr}               from "@kwUiAgGrid/class/col/kwColStr";
import {kweCol}                 from "@kwUiAgGrid/class/col/kweCol";
import {kwLog}                  from '@kw/kwLog';
import {kwtColIn}               from "@kwUiAgGrid/class/col/kwtColIn";
//@formatter:off



const sCLASS: string = "kwFctyCol";


export class kwFctyCol
{

 
    static create(info: kwtColIn): kwCol
    {
        const log: kwLog = new kwLog(sCLASS, "constructor");
        //console.log(log.called());


        if (kw.isNull(info))
        {
            console.error(log.invalid("info"));
            return;
        }
        //console.info(log.is("info", info));


        const nType: kweCol = this.retrieveType(info);
        if (!kwColSrvc.in(nType))
        {
            console.error(log.errLoad("nType"));
            return;
        }


        let col: kwCol;

        switch (nType)
        {
            case kweCol.avatar:
            {
                col = new kwColAvatar(info);
                break;
            }

            case kweCol.bool:
            {
                col = new kwColBool(info);
                break;
            }

            case kweCol.chkBox:
            {
                col = new kwColChkBox(info);
                break;
            }

            case kweCol.date:
            {
                col = new kwColDate(info);
                break;
            }

            case kweCol.hour:
            {
                col = new kwColHour(info);
                break;
            }

            case kweCol.name:
            {
                col = new kwColName(info);
                break;
            }

            case kweCol.num:
            {
                col = new kwColNum(info);
                break;
            }

            case kweCol.phone:
            {
                col = new kwColPhone(info);
                break;
            }

            case kweCol.rowSel:
            {
                col = new kwColRowSel(info);
                break;
            }

            case kweCol.slct:
            {
                col = new kwColSlct(info);
                break;
            }

            case kweCol.str:
            {
                col = new kwColStr(info);
                break;
            }

            default: {
                console.error(log.invalid("nType"));
                return;
            }
        }

        if (!kwCol.is(col))
        {
            console.error(log.errCreate("col"));
            return;
        }
        //console.info(log.isObj("col"), col);

        if (!col.init())
        {
            console.error(log.errInit("col"));
            return;
        }
        //console.info(log.isObj("col"), col);

        return col;
    }


    static retrieveType(info: kwtColIn): kweCol
    {
        const log: kwLog = new kwLog(sCLASS, "retrieveType");
        //console.log(log.called());


        if (kw.isNull(info))
        {
            console.error(log.invalid("info"));
            return;
        }
        //console.info(log.isObj("info"), info);


        const sType: string = info.sType;
        if (!kw.isString(sType))
        {
            console.error(log.invalid("sType"));
            return;
        }
        //console.info(log.isObj("sType"), sType);


        const nType = kwColSrvc.toEnum(sType);
        if (!kwColSrvc.in(nType))
        {
            console.error(log.invalid("nType"));
            return;
        }
        //console.info(log.is("nType", nType));

        return nType;
    }

}
