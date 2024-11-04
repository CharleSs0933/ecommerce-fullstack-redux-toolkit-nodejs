import ProductImageUpload from "@/components/admin-view/image-upload";
import { Button } from "@/components/ui/button";
import { addFeatureImage, getFeatureImages } from "@/store/common-slice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const AdminDashboard = () => {
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [imageLoadingState, setImageLoadingState] = useState(false);

  const { featureImageList } = useSelector((state) => state.commonFeature);

  const dispatch = useDispatch();

  const handleUploadFeatureImage = () => {
    dispatch(addFeatureImage(uploadedImageUrl)).then((data) => {
      if (data?.payload?.success) {
        dispatch(getFeatureImages());
        setUploadedImageUrl("");
        setImageFile(null);
      }
    });
  };

  useEffect(() => {
    dispatch(getFeatureImages());
  }, [dispatch]);

  console.log(featureImageList);

  return (
    <div>
      <h1>Upload Feature Images</h1>
      <ProductImageUpload
        imageFile={imageFile}
        setImageFile={setImageFile}
        uploadedImageUrl={uploadedImageUrl}
        setUploadedImageUrl={setUploadedImageUrl}
        setImageLoadingState={setImageLoadingState}
        imageLoadingState={imageLoadingState}
        isCustomStyling={true}
        // isEditMode={currentEditedId !== null}
      />
      <Button className="mt-5 w-full" onClick={handleUploadFeatureImage}>
        Upload
      </Button>
      <div className="flex flex-col gap-4 mt-5">
        {featureImageList &&
          featureImageList.length > 0 &&
          featureImageList.map((featureImgItem) => (
            <div key={featureImgItem?._id} className="relative">
              <img
                src={featureImgItem?.image}
                className="w-full h-[300px] object-cover rounded-t-lg"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
