import React, { useState, useRef } from "react";
import type { FC } from "react";
import { Text } from "@mantine/core";
import { ImDownload } from "react-icons/im";
interface ImageUploaderProps {
  onChange: (file: File) => void;
  imageUrl?: string;
}

const ImageUploader: FC<ImageUploaderProps> = ({ onChange, imageUrl }) => {
  const [dragOver, setDragOver] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const dropRef = useRef(null);

  const preventDefaults = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    preventDefaults(e);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onChange(e.dataTransfer.files[0]);
      e.dataTransfer.clearData();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files && e.currentTarget.files[0]) {
      onChange(e.currentTarget.files[0]);
      setUploaded(true);
    }
  };

  return (
    <div
      ref={dropRef}
      className={`${
        dragOver ? "drag-over-true" : "drag-over-false"
      } image-uploader`}
      style={{
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${imageUrl})`,
      }}
      onDragEnter={() => {
        setDragOver(true);
        console.log("IMAGE STRING", imageUrl);
      }}
      onDragLeave={() => setDragOver(false)}
      onDragStart={preventDefaults}
      onDragEnd={preventDefaults}
      onDragOver={preventDefaults}
      onDrop={handleDrop}
      onClick={() => fileInputRef.current?.click()}
    >
      {imageUrl && <div className="image-upload-container"></div>}
      {<p className="image-uploader-text"></p>}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleChange}
        className={"image-uploader-input"}
      />
      {/* {!imageUrl && ( */}
      <div
        className={uploaded ? "image-uploader-hidden" : "image-uploader-text"}
      >
        <ImDownload className="image-uploader-icon" />
        <Text> Drag and drop or click to add an image!</Text>
      </div>
      {/* )} */}
    </div>
  );
};
export default ImageUploader;
