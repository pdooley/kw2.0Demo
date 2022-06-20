/**********************************************************************
 *
 * kw/class/kwHeroku.ts
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


const sProp_CREATED_AT: string   = "createdAt";
const sProp_ID: string           = "_id";
const sProp_UPDATED_AT: string   = "updatedAt";

export abstract class kwHeroku
//@formatter:on
{
    protected sClass: string = this.constructor.name;

    public data: object;

    protected sCreatedAt: string;
    protected sId: string;
    protected sUpdatedAt: string;

    constructor(
        private sProp: string="",
        private parent: object )
    {
        //console.log(this.sClass, "::constructor() called");
    }

    protected abstract createChildren(): boolean

    init(): boolean
    {
        //console.log(this.sClass, "::init() called.");

        if (!kw.isNull(this.data))
        {
            console.error(this.sClass, "::init() data already created ");
            return true;
        }

        if (kw.isNull(this.parent))
        {
            console.error(this.sClass, "::init() parent is invalid ");
            return true;
        }
        //console.info(this.sClass, "::init() parent is [", this.parent, "]");

        if (!kw.isString(this.sProp))
        {
            console.error(this.sClass, "::init() sProp is invalid");
            return true;
        }

        if (this.sProp.length === 0 )
        {
            //console.info(this.sClass, "::init() sProp is empty - using parent");
            this.data = this.parent;
        }
        else
        {
            //console.info(this.sClass, "::init() sProp is [", this.sProp, "]");

            const data = this.parent[this.sProp];
            if (kw.isNull(data))
            {
                console.error(this.sClass, "::init() data for [", this.sProp, "] is invalid.");
                return true;
            }

            if (kw.isArray(data) && data.length !== 1)
            {
                console.error(this.sClass, "::init() data for [", this.sProp, "] is invalid.");
                return true;
            }

            if (kw.isArray(data))
            {
                this.data = data[0];
            }
            else
            {
                this.data = data;
            }
        }
        //console.info(this.sClass, "::init() data is [", this.data, "]");

        const sId: string = this.data[sProp_ID];
        if (kw.isString(sId))
        {
            //console.info(this.sClass, "::init() sId is [", sId, "]");
            this.sId = sId;
        }


        const sUpdatedAt: string = this.data[sProp_UPDATED_AT];
        if (kw.isString(sUpdatedAt))
        {
            //console.info(this.sClass, "::init() sUpdatedAt is [", sUpdatedAt, "]");
            this.sUpdatedAt = sUpdatedAt;
        }


        const sCreatedAt: string = this.data[sProp_CREATED_AT];
        if (kw.isString(sCreatedAt))
        {
            //console.info(this.sClass, "::init() sCreatedAt is [", sCreatedAt, "]");
            this.sCreatedAt = sCreatedAt;
        }

        return this.createChildren();
    }

    getCreatedAt(): string
    {
        return this.sCreatedAt;
    }

    getId(): string
    {
        return this.sId;
    }

    getUpdatedAt(): string
    {
        return this.sUpdatedAt;
    }

}
