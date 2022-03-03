const fs = require('fs');

const current_path = process.cwd();

let mp_file = current_path + "/node_modules/@dcloudio/webpack-uni-pages-loader/lib/platforms/mp.js";

fs.readFile(mp_file, 'utf8', function (err, data)
{
    if (err)
    {
       return console.error(" 读取文件错误：\r\n", err);
    }
    
    let result = data.replace(/json\.projectname = value/g, 'json.projectname = process.env.VUE_APP_PROJECT_NAME');
    result = result.replace(/project\.appid = 'touristappid'/g, 'project.appid = ""');
    
    fs.writeFile(mp_file, result, 'utf8', function (err)
    {
        if (err)
        {
            throw "写入文件错误:" + err;
            //return console.error("写入文件错误:", err);
        }
        
        return console.info("修改成功：" + mp_file);
    });
});