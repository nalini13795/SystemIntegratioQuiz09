exports.handler = async (event) => {
    // TODO implement
    var return_value = JSON.parse(event.body)
    var return_string = `Nalini Katiyar says ${return_value.keyword}`
    const response = {
        statusCode: 200,
        body: return_string
    };
    return response;
};
