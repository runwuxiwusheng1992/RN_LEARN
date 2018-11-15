import React, {PropTypes} from 'react';


const HOST = "http://www.baidu.com/";
const HEADER_DEFAULT = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

const NET_OK = 0;
const NET_DATA_EMPTY = 2000;
const NET_DATA_END = 2001;
const NET_LOGIN_TIMEOUT = 3000;

// const NET_ERR =0;

/**
 *
 * @param host 接口主机地址
 * @param action 接口名
 * @param param 参数
 * @param method 请求方法，默认POST
 * @param success 成功回调
 * @param dataEmpty 数据为空回调
 * @param dataEnd 数据到结尾回调
 * @param loginTimeOut 登陆过期回调
 * @param err 其他错误回调
 * @constructor
 */
function CallNet({
                     host,
                     action,
                     param,
                     method,

                     success,
                     dataEmpty,
                     dataEnd,
                     loginTimeOut,
                     err,
                 }) {

    let _method = method ? method : "POST";

    let url = host ? host : HOST;
    if (_method == "GET") {
        // url += "?";
    }
    url += action;

    fetch(url, {
        method: _method,
        headers: HEADER_DEFAULT,
        body: param ? "" : JSON.stringify(param),

    })
        .then(response => response.json())
        .then(responseJSON => {
            success ? success(responseJSON) : null;
            // switch (responseJSON.errCode) {
            //     case NET_OK:
            //         success ? success(responseJSON.result) : null;
            //         break;
            //     case NET_DATA_EMPTY:
            //         dataEmpty ? dataEmpty : null;
            //         break;
            //     case NET_DATA_END:
            //         dataEnd ? dataEnd : null;
            //         break;
            //     case NET_LOGIN_TIMEOUT:
            //         loginTimeOut ? loginTimeOut : null;
            //         break;
            //     default:
            //         err ? err : null;
            // }
        }).catch(errObj => err ? err(errObj) : null);
}


export {CallNet};
