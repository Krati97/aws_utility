import AWS from "aws-sdk";
import { SUBNET_FILTER_VALUE } from "../constants/constants.js";
AWS.config.update({ region: "ap-south-1" });

let ec2 = new AWS.EC2({ apiVersion: "2022-02-01" });

//Function to get the list of all Subnets within a specific VPC
export const descriveSubnets = (req, res) => {
  let { vpcId, region } = req.query;

  //update region here as per the precedence
  ec2 = new AWS.EC2({ apiVersion: "2022-02-01", region });

  let params = {
    Filters: [
      {
        Name: SUBNET_FILTER_VALUE.NAME,
        Values: [vpcId],
      },
    ],
  };
  try {
    ec2.describeSubnets(params, function (err, data) {
      if (err) {
        res.status(400).json({ error: err });
      } else {
        if (data.Subnets[0] == null) {
          return res.status(400).json({
            msg: `The vpcId must be in the specific region!`,
          });
        }
        res.status(200).json({ data });
      }
    });
  } catch (err) {
    res.status(500).json({ err: err });
  }
};
