# Application to describe AWS regions, VPCs and subnets

## Steps for project setup:
```
npm install
touch .env
```
Add PORT and AWS_SDK_LOAD_CONFIG with its value in the .env file created above.
In this example we have used the following in .env:
```
PORT=3000
AWS_SDK_LOAD_CONFIG=true
```

### To run the server use: 
```
nodemon server.js
```

## Swagger URL
The link for swagger documentation is : (The port's value should be same as mentioned in .env file)
```
http://localhost:3000/v1/aws-api-docs/
```

### API end points:
GET
1. List of available regions: /v1/aws/regions
 - No query params required.
2. List of all VPCs within a specific region: /v1/aws/vpcs
 - pass "region" with proper value(eg:ap-south-1) in in query param.
3. List of all Subnets within a specific VPC: /v1/aws/subnets
 - pass "region" with proper region in in query param.
 - pass "vpcId" (corrosponding to the region) with proper vpc ID in query param.

## NOTE: This code has been tested using an IAM user profile which does not have MFA enabled.