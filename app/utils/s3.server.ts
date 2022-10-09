import { unstable_parseMultipartFormData } from "@remix-run/node";
import type { UploadHandler } from "@remix-run/node";
import { Readable } from "stream";
import S3 from "aws-sdk/clients/s3";
import cuid from "cuid";

const s3 = new S3({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
});

const uploadHandler: UploadHandler = async ({ name, filename, data }) => {
  const stream = Readable.from(data);
  if (name !== "character-portrait") {
    stream.resume();
    return;
  }
  if (filename) {
    try {
      const { Location } = await s3
        .upload({
          Bucket: process.env.AWS_BUCKET_NAME || "",
          Key: `${cuid()}.${filename.split(".").slice(-1)}`,
          Body: stream,
        })
        .promise();

      return Location;
    } catch (err) {
      console.log(err);
    }
  } else return null;
};

export async function uploadImage(request: Request) {
  const formData = await unstable_parseMultipartFormData(
    request,
    uploadHandler
  );

  const file = formData.get("profile-pic")?.toString() || "";

  return file;
}
