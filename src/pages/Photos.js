import React, { useContext } from "react";
import { PhotosContext } from "../Context";
import Image from "../components/Image";
import { getClass } from "../utils";

export default function Photos() {
  const { allPhotos } = useContext(PhotosContext);

  const imageElements = allPhotos.map((img, idx) => (
    <Image key={img.id} img={img} className={getClass(idx)} />
  ));

  return <main className="photos">{imageElements}</main>;
}
