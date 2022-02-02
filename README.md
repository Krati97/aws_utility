# Application to describe AWS regions, VPCs and subnets

## Steps for project setup:
```
npm install
touch .env
```
Add PORT with its value in the .env file created above.

### To run the server use: 
```
nodemon server.js
```

## Swagger URL
The link for swagger documentation is : 
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