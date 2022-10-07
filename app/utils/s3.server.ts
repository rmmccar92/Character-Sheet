import { unstable_parseMultipartFormData } from "@remix-run/node";
import type { UploadHandler } from "@remix-run/node";
import S3 from "aws-sdk/clients/s3";
import cuid from "cuid";

const s3 = new S3({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
});

const uploadHandler: UploadHandler = async ({ name, filename, stream }) => {
  if (name !== "character-portrait") {
    stream.resume();
    return;
  }

  const { location } = await s3
    .upload({
      Bucket: process.env.AWS_BUCKET_NAME || "",
      Key: `${cuid()}.${filename?.split(".")?.slice(-1)}`,
      Body: stream,
    })
    .promise();

  return location;
};

export const uploadImage = async (request: Request) => {
  const formData = await unstable_parseMultipartFormData(
    request,
    uploadHandler
  );
  const file = formData.get("character-portrait")?.toString() || "";

  return file;
};
