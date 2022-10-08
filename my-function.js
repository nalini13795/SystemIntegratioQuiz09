exports.handler = async (event) => {
    // TODO implement
    var return_value = JSON.parse(event.body)
    if(return_value.keyword){
        var return_string = `Nalini Katiyar says ${return_value.keyword}`
    }else{
        var return_string = `Nalini Katiyar says `
    }
    const response = {
        statusCode: 200,
        body: return_string
    };
    return response;
};
