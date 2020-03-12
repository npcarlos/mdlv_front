console.log("Ejecutando script");

var fs = require('fs'),
    xml2js = require('xml2js');
 
var parser = new xml2js.Parser();
fs.readFile(__dirname + '/../android/app/src/main/res/values/strings.xml', function(err, data) {
    parser.parseString(data, function (err, result) {
        let strings = result.resources.string;
        strings.forEach(stringTag => {
            if(stringTag["$"].name == "app_name")
            {
                stringTag["_"] = "DEV MDLV";
            }
            else if(stringTag["$"].name == "title_activity_main")
            {
                stringTag["_"] = "DEV MDLV";
            }
        });
        console.dir(JSON.stringify(result));
        var builder = new xml2js.Builder();
        var xml = builder.buildObject(result);
        console.log("XML NUEVO");
        console.log(xml);
        fs.writeFile(__dirname + '/../android/app/src/main/res/values/strings.xml', xml, function(errW, dataW){
            console.log("archivo generado");
        });
        console.log('Done');
    });
});

console.log("Cambio de nombre realizado");