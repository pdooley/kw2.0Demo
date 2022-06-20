/**********************************************************************
 *
 * kw/class/acts/kwActs.ts
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
import {kw }               from "@kw/kw";
import {kwAct }            from "@kwClass/act/kwAct";
import {kwActAll }         from "@kwClass/act/kwActAll";
import {kwActType }        from "@kwClass/act/kwActType";
import {kwActGet }         from "@kwClass/act/kwActGet";
import {kwActDel }         from "@kwClass/act/kwActDel";
import {kwActPost }        from "@kwClass/act/kwActPost";
import {kwActUpdate }      from "@kwClass/act/kwActUpdate";
import {kwActPatch }       from "@kwClass/act/kwActPatch";

import {kwActsType }       from "./kwActsType";
import {kwLog} from "@kw/kwLog";

const sALL:     string = 'all';
const sDEL:     string = 'delete';
const sGET:     string = 'get';
const sPATCH:   string = 'patch';
const sPOST:    string = 'post';
const sUPDATE:  string = 'update';


export class kwActs
//@formatter:on
{
    protected sClass: string = this.constructor.name;

    _all: kwAct;
    _delete: kwAct;
    _get: kwAct;
    _patch: kwAct;
    _post: kwAct;
    _update: kwAct;

    constructor(private type: kwActsType)
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

    get all(): kwAct { return this._all; }
    get delete(): kwAct { return this._delete; }
    get get(): kwAct{ return this._get; }
    get patch(): kwAct{ return this._patch; }
    get post(): kwAct{ return this._post; }
    get update(): kwAct{ return this._update; }

    init(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());

        //console.info(this.sProp, "::init() type is[", this.type, "].");

        if (kw.isNull(this.type))
        {
            console.error(log.invalid("type"));
            return false;
        }
        //console.info(log.isObj("nType"), this.nType);

        const typeAll: kwActType = this.type[sALL];
        if (!kw.isNull(typeAll))
        {
            //console.info(log.isObj("typeAll"), typeAll);
            const act: kwAct = new kwActAll(typeAll);
            if (!act.init())
            {
                console.error(log.invalid("type"));
                return false;
            }
            //console.info(log.isObj("_all"), act);
            this._all = act;
        }

        const typeDel: kwActType = this.type[sDEL];
        if (!kw.isNull(typeDel))
        {
            //console.info(log.isObj("typeDel"), typeDel);
            const act: kwAct = new kwActDel(typeDel);
            if (!act.init())
            {
                console.error(log.invalid("act"));
                return false;
            }
            //console.info(log.isObj("_delete"), act);
            this._delete = act;
        }

        const typeGet: kwActType = this.type[sGET];
        if (!kw.isNull(typeGet))
        {
            //console.info(log.isObj("typeGet"), typeGet);
            const act: kwAct = new kwActGet(typeGet);
            if (!act.init())
            {
                console.error(log.invalid("act"));
                return false;
            }
            //console.info(log.isObj("_get"), act);
            this._get = act;
        }

        const typePatch: kwActType = this.type[sPATCH];
        if (!kw.isNull(typePatch))
        {
            //console.info(log.isObj("typePatch"), typePatch);
            const act: kwAct = new kwActPatch(typePatch);
            if (!act.init())
            {
                console.error(log.invalid("act"));
                return false;
            }
            //console.info(log.isObj("_patch"), act);
            this._patch = act;
        }

        const typePost: kwActType = this.type[sPOST];
        if (!kw.isNull(typePost))
        {
            //console.info(log.isObj("typePost"), typePost);
            const act: kwAct = new kwActPost(typePost);
            if (!act.init())
            {
                console.error(log.invalid("act"));
                return false;
            }
            //console.info(log.isObj("_post"), act);
            this._post = act;
        }

        const typeUpdate: kwActType = this.type[sUPDATE];
        if (!kw.isNull(typeUpdate))
        {
            //console.info(log.isObj("typeUpdate"), typeUpdate);
            const act: kwAct = new kwActUpdate(typeUpdate);
            if (!act.init())
            {
                console.error(log.invalid("act"));
                return false;
            }
            //console.info(log.isObj("_update"), act);
            this._update = act;
        }

        return true;
    }


    static is(obj: object): boolean
    {
        return kw.is(obj, kwActs)
    }


}

