const AWS = require('aws-sdk');

exports.handler = async (event) => {
  try {
    // Extract user data from the event body
    const { idUsuario, aceptaDatos } = JSON.parse(event.body);

    // Initialize DynamoDB client
    const dynamodb = new AWS.DynamoDB.DocumentClient();

    // Validate acceptsDatos value
    if (!aceptaDatos) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          success: false,
          message: 'Error: El valor de aceptaDatos debe ser true.',
        }),
      };
    }

    // Update user data in DynamoDB table
    await dynamodb.update({
      TableName: 'datos-personales', // Replace with your actual table name
      Key: { idUsuario },
      UpdateExpression: 'SET aceptaDatos = :aceptaDatos',
      ExpressionAttributeValues: { ':aceptaDatos': aceptaDatos },
    }).promise();

    // Return successful response
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Aceptación de datos registrada correctamente.',
      }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        message: 'Error al registrar la aceptación de datos.',
      }),
    };
  }
};
