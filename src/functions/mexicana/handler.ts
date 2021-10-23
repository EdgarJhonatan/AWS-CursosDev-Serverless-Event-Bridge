import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/apiGateway";
import { formatJSONResponse } from "@libs/apiGateway";
import { middyfy } from "@libs/lambda";

import schema from "./schema";

const mexicana: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
) => {
  console.log(event);
  return formatJSONResponse(event);
};

export const main = middyfy(mexicana);
