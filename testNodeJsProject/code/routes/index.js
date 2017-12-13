/**
 * ---------------------------------------------------------------------------------------------------------------------
 * 文件描述：公告路由
 * 开发者：lkl on 2016/12/3
 * 开发者备注：
 * 审阅者：
 * 优化建议：
 * ---------------------------------------------------------------------------------------------------------------------
 */
var express = require('express');
var router = express.Router();
var log  = require('../src/common/log_manager').logiclog;
var async = require('async');
var agentDb = require('../src/database/game');

router.get('/', function(req, res) {
    var agentName = req.session.agentName;  //代理账户
    var privilege = req.session.privilege;  //代理等级
    var agentId = req.session.agentId;        //代理Id
    var accountData = '';                    /* 公告信息 */
    var insureScore = 0;        /* 玩家房卡数 */
    if(!agentName){
        res.redirect('/login.html');
        return;
    }

    async.waterfall([
        /* 获取公告信息 */
        function (callback) {
            announceDb.getAnnounceInfo(callback);
        },
        /* 根据agentId查询玩家游戏数据 */
        function(result,callback){

            accountData = result.announce_data;         //公告内容
            agentDb.getAgentInfoByAgentId(agentId,callback);
        },
        function(result, callback){
            insureScore = result.bj_insure_score;
            callback(null);
        }
    ],function(err){
        if(err){
            log.error(err);
        }
        if(req.session.isPC=="true"){
            res.render('index',{
                title:'公告',
                privilege:privilege,
                allView:req.session.allView,
                agentName:agentName,
                announceInfo:accountData,
                insureScore:insureScore,
                pwd:req.session.pwd,
            });
        }else{
            res.render('indexMobile', {
                title:'公告',
                privilege:privilege,
                agentName: agentName,
                announceInfo:accountData,
                insureScore: insureScore,
                userId:req.session.userId,
                allView:req.session.allView,
                pwd:req.session.pwd,
            });
        }
    });
});

module.exports = router;
