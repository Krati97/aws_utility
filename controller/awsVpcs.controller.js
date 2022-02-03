process.env.AWS_SDK_LOAD_CONFIG=true; 
import AWS from "aws-sdk";
import { VPC_FILTER_VALUE } from "../constants/constants.js";

//Load region from config file
let defaultRegion 
if(process.env.AWS_SDK_LOAD_CONFIG) {
   defaultRegion = AWS.config.region;
}
AWS.config.update({ region: defaultRegion });

let ec2 = new AWS.EC2({ apiVersion: "2022-02-01" });

//Function to get the list of all VPCs within a specific region
export const describeVPCs = (req, res) => {
  //Retrive region from query or passing default
  let regionString = req.query.region ? req.query.region : defaultRegion;

  //update region here as per the precedence
  ec2 = new AWS.EC2({ apiVersion: "2022-02-01", region: regionString });

  let params = {
    Filters: [
      {
        Name: VPC_FILTER_VALUE.NAME,
        Values: [VPC_FILTER_VALUE.VALUES_AVAILABLE],
      },
    ],
  };
  try {
    ec2.describeVpcs(params, function (err, data) {
      if (err) {
        res.status(400).json({ error: err });
      } else {
        res.status(200).json({ data });
      }
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
