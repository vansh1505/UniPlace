import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { cookies } from "next/headers";

const f = createUploadthing();

// Minimal fake auth to extract user from cookie (assuming middleware already validated JWT)
const auth = async (req: Request) => {
  const cookieStore = await cookies(); // await the promise
  const token = cookieStore.get("token")?.value;

  if (!token) return null;

  // Just parse token if you want user details, else return placeholder
  // You could decode token if needed, for now we use email as placeholder
  return { email: "user@example.com" }; // Replace with actual user extraction logic
};

export const ourFileRouter = {
  pdfUploader: f({
    pdf: {
      maxFileSize: "2MB",
      maxFileCount: 1,
      
    },
  })
    .middleware(async ({ req }) => {
      const user = await auth(req);
      if (!user) throw new UploadThingError("Unauthorized");

      return { userEmail: user.email };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("✅ Upload complete for user:", metadata.userEmail);
      console.log("📄 File URL:", file.url);

      // Save to DB if needed
      return { uploadedBy: metadata.userEmail };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
