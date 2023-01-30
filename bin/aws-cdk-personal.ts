#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AwsCdkPersonalStack } from '../lib/aws-cdk-personal-stack';

const app = new cdk.App();
new AwsCdkPersonalStack(app, 'AwsCdkPersonalStack', {

  env: { account: '977420232511', region: 'us-east-1' },

});