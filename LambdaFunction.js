const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    // YYYY-MM-DD
    const queryDate = new Date().toISOString().split('T')[0];

    const params = {
        TableName: 'Bill_Bryson_Data',
        KeyConditionExpression: '#date = :dateVal',
        ExpressionAttributeNames: {
            '#date': 'Date',
        },
        ExpressionAttributeValues: {
            ':dateVal': queryDate,
        },
        ScanIndexForward: false, // desc order
        Limit: 10, // most recent X minutes
    };

    try {
        const data = await dynamodb.query(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify(data.Items), // "*" below sets it to accept any origin
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Headers" : "Content-Type",
                "Access-Control-Allow-Origin": "*",  // CHANGE THIS WHEN I DEPLOY
                "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
            }
        };
    } catch (error) {
        console.error(error);
        // Need header for CORS permissions, don't remove!!
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Failed to query items" }),
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Headers" : "Content-Type",
                "Access-Control-Allow-Origin": "https://www.example.com",
                "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
            }
        };
    }
};
