import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as apigateway from "aws-cdk-lib/aws-apigateway";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CahCloneProjectStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'CahCloneProjectQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });

    const secretFunction = new lambda.Function(this, "SecretFunction", {
      runtime: lambda.Runtime.NODEJS_14_X,
      handler: "app.handler",
      code: lambda.Code.fromAsset("./lambda"),
    });

    // create rest api
    const api = new apigateway.LambdaRestApi(this, "secret-api", {
      handler: secretFunction,
      proxy: false,
    });

    // add resource and methods
    const secret = api.root.addResource("secret");

    secret.addMethod("GET");
  }
}
