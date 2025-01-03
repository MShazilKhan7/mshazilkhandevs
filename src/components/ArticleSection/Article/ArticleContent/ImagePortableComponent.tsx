import React from "react";
import { urlFor } from "@/sanity/utils/sanity-utils";
import Image from "next/image";

const ImagePortableComponent = ({ value }: { value: any }) => {
  // if we donot have the image asset, return the value as it is
  if (!value?.asset?._ref) {
    return value;
  }
  return (
    <div className="w-full flex justify-center flex-col">
      <Image
        alt={value.alt || "Image"}
        loading="lazy"
        src={`${urlFor(value)}`}
        height={value?.imageHeight}
        width={value?.imageWidth}
        objectFit="cover"
      />
      {value.alt && (
        <i className="text-gray-600 flex justify-center text-center">
          {value.alt}
        </i>
      )}
    </div>
  );
};

export default ImagePortableComponent;
