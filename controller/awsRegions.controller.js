import AWS from "aws-sdk";

AWS.config.update({ region: "ap-south-1" });

let ec2 = new AWS.EC2({ apiVersion: "2022-02-01" });

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
