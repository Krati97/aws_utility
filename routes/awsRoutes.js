import express from "express";

const router = express.Router();

//Import controller functions 
import { describeRegions } from "../controller/awsRegions.controller.js";
import { describeVPCs } from "../controller/awsVpcs.controller.js"
import { descriveSubnets } from "../controller/awsSubnets.controller.js"

//Get a list of all available AWS regions
/**
 * @swagger
 * /v1/aws/regions:
 *  get:
 *      summary: AWS regions
 *      description: API to get all available AWS regions.
 *      responses:
 *          200:
 *              description: Got AWS Regions Successfully!
 *          400: 
 *              description: Error in fetching AWS Regions.
 */
router.get("/regions", describeRegions);

//Get a list of all VPCs within a specific region
/**
 * @swagger
 * /v1/aws/vpcs:
 *  get:
 *      summary: AWS VPCs within a region
 *      description: API to get all available AWS VPCs within a region.
 *      parameters:
 *               - in: query
 *                 name: region
 *                 type: string
 *                 description: Pass a region name or default region is picked from config file.
 *      responses:
 *          200:
 *              description: Got AWS VPCs Successfully!
 *          400: 
 *              description: Error in fetching AWS VPCs.
 */
router.get("/vpcs", describeVPCs);

//Get a list of all Subnets within a specific VPC
/**
 * @swagger
 * /v1/aws/subnets:
 *  get:
 *      summary: AWS subnets within a VPC
 *      description: API to get all available AWS subnets within a VPC.
 *      parameters:
 *               - in: query
 *                 name: region
 *                 type: string
 *                 required: true
 *                 description: Pass a region name. 
 *               - in: query
 *                 name: vpcId
 *                 type: string
 *                 required: true
 *                 description: Pass a VPC ID corrosponding to region name.
 *      responses:
 *          200:
 *              description: Got AWS subnets Successfully!
 *          400: 
 *              description: Error in fetching AWS subnets.
 */
router.get("/subnets", descriveSubnets)


//Export router
export default router;