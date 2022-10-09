import React, { useState, useRef } from "react";
import type { FC } from "react";

interface ImageUploaderProps {
  onChange: (file: File) => void;
  imageUrl: string;
}

const ImageUploader: FC<ImageUploaderProps> = ({ onChange, imageUrl }) => {
  const [dragOver, setDragOver] = useState(false);
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
    }
  };

  return (
    <div
      ref={dropRef}
      className={`${dragOver ? "drag-over-true" : "drag-over-false"}`}
      style={{
        backgroundSize: "cover",
        ...(imageUrl ? { backgroundImage: `url(${imageUrl})` } : {}),
      }}
      onDragEnter={() => setDragOver(true)}
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
        className="image-uploader-input"
      />
    </div>
  );
};
export default ImageUploader;