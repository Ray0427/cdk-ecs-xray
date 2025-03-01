#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkEcsXrayStack } from '../lib/cdk-ecs-xray-stack';

const app = new cdk.App();
new CdkEcsXrayStack(app, 'CdkEcsXrayStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});
