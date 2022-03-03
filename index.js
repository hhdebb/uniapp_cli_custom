var fs = require('fs');

let current_path = process.cwd();

let mp_file = current_path + "/node_modules/@dcloudio/webpack-uni-pages-loader/lib/platforms/mp.js";

fs.readFile(mp_file, 'utf8', function (err, data)
{
    if (err)
    {
        return console.log("读取文件错误:", err);
    }
    
    var result = data.replace(/json\.projectname = value/g, 'json.projectname = process.env.VUE_APP_PROJECT_NAME');
    result = result.replace(/project\.appid = 'touristappid'/g, 'project.appid = ""');
    
    fs.writeFile(mp_file, result, 'utf8', function (err)
    {
        if (err)
        {
            return console.log("写入文件错误:", err);
        }
        
        return console.log("修改成功：" + mp_file);
    });
});