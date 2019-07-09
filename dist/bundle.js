(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global['jujue-login'] = factory());
}(this, function () { 'use strict';

    let _mms = null;
    const DDN = 'UC';

    const login = ({ username, password, keepLogin = false }) => _mms.callMMS({
        topic: '',
        DDN,
        func: 'ucLogin',
        payload: [username, password, keepLogin]
    });

    const signup = ({
        username, password,
        mobileNo: MobileNo,
        nickName: NickName,
        firstName: FirstName,
        lastName: LastName,
        sex: Sex
    }) => _mms.callMMS({
        topic: '',
        DDN,
        func: 'ucSignup',
        payload: [username, password, {
            MobileNo, NickName, FirstName, LastName, Sex
        }]
    });

    const logout = () => _mms.callMMS({
        topic: '',
        DDN,
        func: 'ucLogout',
        payload: []
    });

    const getUserInfo = () => _mms.callMMS({
        topic: '',
        DDN,
        func: 'ucGetUserInfo',
        payload: []
    });

    const setUserInfo = ({
        mobileNo: MobileNo,
        nickName: NickName,
        firstName: FirstName,
        lastName: LastName,
        sex: Sex
    }) => _mms.callMMS({
        topic: '',
        DDN,
        func: 'ucSetUserInfo',
        payload: [{ MobileNo, NickName, FirstName, LastName, Sex }]
    });

    function jujue(mms) {
        if (!mms) {
            throw new Error('need a webmms instance.')
        }

        _mms = mms;
        return { login, signup, logout, getUserInfo, setUserInfo }
    }

    return jujue;

}));
