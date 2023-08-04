import { FinancesAPI } from "./src/app";
import { config } from "dotenv";

config()

const port = process.env.PORT || 3000

FinancesAPI.app.listen(port, FinancesAPI.main)