/**
 * ---------------------------------------------------------------------------------------------------------------------
 * 文件描述：全局变量管理
 * 开发者：lkl on 2017/2/22
 * 开发者备注：
 * 审阅者：
 * 优化建议：
 * ---------------------------------------------------------------------------------------------------------------------
 */


var GlobalManager = (function () {

    /**
     * 私有成员变量
     * */
    var _unique;

    /**
     * 单例函数
     * @return [object] 返回实例化对象
     * */
    function instance() {
        if(_unique === undefined){
            _unique = new GlobalManager();
        }
        return _unique;
    }

    /**
     * 构造函数
     * */
    function GlobalManager() {
        this.noteNum = 0;   /** 短信条数 */
        this.code = 0;      /** 短信验证码 */
    }

    // /**
    //  * 获取短信条数
    //  * */
    // GlobalManager.prototype.getNoteNum = function () {
    //     return this.noteNum;
    // };
    //
    // /**
    //  * 设置短信条数
    //  * */
    // GlobalManager.prototype.setNoteNum = function (num) {
    //     this.noteNum = parseInt(num);
    // };

    /**
     * 存储验证码
     * */
    GlobalManager.prototype.setCode = function (num) {
        this.code = num;
    };
    /**
     * 取出验证码
     * */
    GlobalManager.prototype.getCode = function () {
        return this.code;
    };

    return instance;
})();

exports.Instance = GlobalManager;