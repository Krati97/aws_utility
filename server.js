import express from "express";
import cors from "cors";
import "dotenv/config.js";
import router from "./routes/awsRoutes.js"
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//Swagger implementation
const options = {
    definition: {
        openapi: '3.0.3',
        info: {
            title: "AWS Details",
            description: "A tool to fetch the AWS available regions, VPCs and subnets",
            version: "1.0.0",
            contact: {
              name: "Krati Maheshwari", 
              email: "kabara.krati@gmail.com",
            },
        },
        servers: [
            {
                url: `http://localhost:${process.env.PORT}/`,
                description: "Local Server",
            }
        ]
    },
    apis: ['./routes/*.js']
}

const swaggerSpec = swaggerJSDoc(options);
app.use('/v1/aws-api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

//AWS route
app.use("/v1/aws", router);

// Port
const PORT = process.env.PORT || 5000;

//Listining on given port
app.listen(PORT, () => console.log(`Sever running on port: ${PORT}`));
