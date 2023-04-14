export const uploadImage = async (file: File) => {
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

  const cloudUrl = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

  const formData = new FormData();
  formData.append("upload_preset", "foundations");
  formData.append("file", file);

  try {
    const resp = await fetch(cloudUrl, {
      method: "POST",
      body: formData,
    });

    if (!resp.ok) throw new Error("image could not be uploaded");
    const cloudResp = await resp.json();

    return cloudResp.secure_url;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
