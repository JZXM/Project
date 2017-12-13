/*============================================================
 *
 * 加密解密算法
 *
 * Created by zhongzhilong on 2016/2/22.
 *
 =============================================================*/

var crypto = require('crypto');     //引入nodejs加密库
var algorithm = 'aes-256-ecb';    //加密算法
var iv = "";                        //向量
var fs = require('fs');


exports.signer = function (data){
    var algorithm = 'RSA-SHA1';
    var privatePem = fs.readFileSync('./../../config/rsa_private_key.pem');
    var key = privatePem.toString();
    var sign = crypto.createSign(algorithm);
    sign.update(data, 'utf8');
    var sig = sign.sign(key, 'base64');


    console.log('RSA签名完成. 签名结果：' + sig);
    var sign_encode = encodeURI(sig, "utf-8");
    return sign_encode;
};

/*
 * 加密函数
 * 参数：无
 * 返回：正常 tokenID
 */
exports.encodeCipher = function (key, data){
    try{
        var cipher = crypto.createCipheriv(algorithm, key, iv);
        var cipherChunks = [];
        cipherChunks.push(cipher.update(data, 'utf8', 'base64'));
        cipherChunks.push(cipher.final('base64'));
        var encodeText = cipherChunks.join('');
        encodeText = encodeText.replace(/\//g, "_");
        encodeText = encodeText.replace(/\+/g, "-");
        return encodeText;
    }catch(e){
        console.log('加密错误. 详细：' + e.message);
        return "";
    }
};

/*
 * 解密函数
 * 参数：无
 * 返回：正常 tokenID
 */
exports.decodeCipher = function (key, data){
    try{
        var encodeText = data.replace(/\_/g, "/");
        encodeText = encodeText.replace(/\-/g, "+");
        var cipherChunks = [encodeText];
        var decipher = crypto.createDecipheriv(algorithm, key, iv);
        var plainChunks = [];
        for (var i = 0;i < cipherChunks.length;i++) {
            plainChunks.push(decipher.update(cipherChunks[i], 'base64', 'utf8'));
        }
        plainChunks.push(decipher.final('utf8'));
        return plainChunks.join('');
    }catch(e){
        console.log('解密错误');
        return "";
    }
};

exports.verifySign = function (data, sig){
    var algorithm = 'RSA-SHA1';
    var publicPem = fs.readFileSync('../key/alipay_public_key.pem');
    var pubkey = publicPem.toString();
    var verify = crypto.createVerify(algorithm);
    verify.update(data, 'utf8');
    var result = verify.verify(pubkey, sig, 'base64');
    console.log('RSA签名验证完成. 验证结果：' + result);
    return result;
};

/*
 * md5加密函数
 * 参数：无
 * 返回：正常 tokenID
 */
exports.md5 = function(data){
    try{
        var md5 = crypto.createHash("md5");
        md5.update(data, 'utf8');
        var result = md5.digest('hex');
        return result;
    }catch(e){
        console.log('md5加密函数错误');
        return "";
    }
}

/*
 * sha1加密函数
 * 参数：无
 * 返回：正常 加密结果
 */
exports.sha1 = function(data){
    try{
        var shasum = crypto.createHash("sha1");
        console.log(data);
        shasum.update(data, 'utf8');
        return shasum.digest('hex');
    }catch(e){
        console.log('sha1加密函数错误');
        return "";
    }
};

/*
 * sha1withRSA加密函数
 * 参数：无
 * 返回：正常 签名
 */
exports.sha1WithRSA = function (data){
    try{
        var privatePem = fs.readFileSync('./key/sha_private_key.pem');
        var key = privatePem.toString();
        var sign = crypto.createSign("RSA-SHA1");
        sign.update(data);
        return sign.sign(key, 'base64');
    }catch(e){
        console.log('签名函数错误');
        return "";
    }
};

/*
 * sha1withRSA验签函数
 * 银联返回验签函数
 * 参数：无
 * 返回：正常 签名
 */
exports.verifySha1WithRSA = function (digest, signature){
  try{
    var publicPem = fs.readFileSync('./key/sha_public_key.cer');
    var publicKey = publicPem.toString();
    var verify = crypto.createVerify("RSA-SHA1");
    verify.update(digest);
    return verify.verify(publicKey, signature, 'base64');
  }catch(e){
    console.log('验证签名错误');
    return "";
  }
};

/*
 * md5加密函数(加盐)
 * 参数：无
 * 返回：正常 tokenID
 */
exports.md5_md5 = function (data){
    var data_md5 = md5(data);
    var salt = "gde";
    if( data_md5 == "" ){
        return "";
    }
    var result = md5(salt + data_md5);
    return result;
};

