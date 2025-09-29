import { promises } from 'node:fs';
import YAML from 'yamljs';
import prettier from 'prettier';
import converter from 'swagger2openapi';
import SwaggerParser from '@apidevtools/swagger-parser';
const swaggerYML = await promises.readFile('yml/swagger.yml', { encoding: 'utf8' }); // 2.0 YML
const openapiJSON = await formatJSON((await converter.convertStr(swaggerYML, {})).openapi);
{ // 3.0 JSON
    await validate(openapiJSON);
    await write('json/openapi.json', openapiJSON);
}
{ // 2.0 JSON
    const swaggerJson = await formatJSON(YAML.parse(swaggerYML));
    await validate(swaggerJson);
    await write('json/swagger.json', swaggerJson);
}
{ // 3.0 YML
    const openapiYML = await prettier.format(YAML.stringify(JSON.parse(openapiJSON)), {
        parser: "yaml"
    });
    await write('yml/openapi.yml', openapiYML);
}
async function formatJSON(jsonStr) {
    return await prettier.format(JSON.stringify(jsonStr), {
        parser: "json"
    });
}
async function write(path, content) {
    return await promises.writeFile(path, content, { encoding: "utf8" });
}
async function validate(json) {
    return await SwaggerParser.validate(JSON.parse(json));
}
//# sourceMappingURL=build.mjs.map