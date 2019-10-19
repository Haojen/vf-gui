/** 默认的自定义字段基础代理 */

export const defaultUpdateFieldsProxyHandler = {
    get(target:TAny, key: string, receiver: TAny) {
        return (target as TAny)[key];
    },
    set(target:TAny, key: string, value: TAny, receiver: TAny) {
        if ((target as TAny)[key] === value) {
            return true;
        }
        target.dirty.dirty = true;
        (target as TAny)[key] = value;
        return true;
    }
}

export class BaseFields{
    public dirty  = {dirty:false};
    private _proxy = {data:this};

    public get proxyData(){
        return this._proxy.data;
    }
    
    constructor(updateFieldsProxyHandler?:TAny){
        if(updateFieldsProxyHandler){
            this._proxy.data = new Proxy(this, updateFieldsProxyHandler);
        }else{
            this._proxy.data = new Proxy(this, defaultUpdateFieldsProxyHandler);
        }
    }
}



