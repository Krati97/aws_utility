process.env.AWS_SDK_LOAD_CONFIG=true; 
import AWS from "aws-sdk";

//Load region from config file
let defaultRegion 
if(process.env.AWS_SDK_LOAD_CONFIG) {
   defaultRegion = AWS.config.region;
}

AWS.config.update({ region: defaultRegion });

const ec2 = new AWS.EC2({ apiVersion: "2022-02-01" });

//Function to get the list of all available AWS regions
export const describeRegions = (req, res) => {
  let params = {};
  try {
    ec2.describeRegions(params, (err, data) => {
      if (err) {
        res.status(400).json({
          error: err,
        });
      } else {
        //Return The list of all awailable regions
        res.status(200).json({ data });
      }
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
