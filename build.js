const {promises} = require('fs');
const YAML = require('yamljs');
const prettier = require('prettier');
const converter = require('swagger2openapi');
const SwaggerParser = require('@apidevtools/swagger-parser');

const formatJSON = jsonStr => prettier.format(JSON.stringify(jsonStr), {
    parser: 'json',
});

const formatYAML = yaml => prettier.format(yaml, {
    parser: 'yaml',
});

const write = async (path, content) =>
    await promises.writeFile(path, content, {encoding: 'utf8'});

const validate = async json => await SwaggerParser.validate(JSON.parse(json));

(async () => {
    const swaggerYml = await promises.readFile('yml/swagger.yml', {encoding: 'utf8'}); // 2.0 YML

    let {openapi: openapiJson} = await converter.convertStr(swaggerYml, {});
    openapiJson = formatJSON(openapiJson);
    await validate(openapiJson);
    await write('json/openapi.json', openapiJson); // 3.0 JSON

    let swaggerJson = YAML.parse(swaggerYml);
    swaggerJson = formatJSON(swaggerJson);
    await validate(swaggerJson);
    await write('json/swagger.json', swaggerJson); // 2.0 JSON

    let openapiYML = YAML.stringify(JSON.parse(openapiJson));
    openapiYML = formatYAML(openapiYML);
    await write('yml/openapi.yml', openapiYML); // 3.0 YML
})();