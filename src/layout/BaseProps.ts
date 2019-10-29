/** 默认的自定义字段基础代理 */

export const defaultUpdatePropsProxyHandler = {
    get(target: TAny, key: string) {
        return (target as TAny)[key];
    },
    set(target: TAny, key: string, value: TAny,) {
        if ((target as TAny)[key] === value) {
            return true;
        }
        target.dirty.dirty = true;
        (target as TAny)[key] = value;
        return true;
    }
}

export class BaseProps{
    public dirty  = {dirty:false};
    private _proxy = {data:this};

    public get proxyData(){
        return this._proxy.data;
    }
    
    constructor(updatePropsProxyHandler?: TAny){
        if(updatePropsProxyHandler){
            this._proxy.data = new Proxy(this, updatePropsProxyHandler);
        }else{
            this._proxy.data = new Proxy(this, defaultUpdatePropsProxyHandler);
        }
    }
}



