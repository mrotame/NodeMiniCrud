
const Axios = require('axios')

async function doRequest(uri, token) {
    const config = {
        headers: { Authorization: `Bearer ${token}` }
        };
    
    const bodyParameters = {
        key: "value"
        };
    
    var result = await Axios.post(uri,bodyParameters,config).then().catch();
    return result
}
module.exports = doRequest;
