import Image from "next/image";

interface Props {
    imageSrc: string,
    imageWidth: number,
    imageHeight: number,
    videoSrc: string,
}

export default function ImageVideoOverlay({ imageSrc, imageWidth, imageHeight, videoSrc }: Props) {
    const aspectRatio = `${imageWidth}/${imageHeight}`;

    return (
        <div className="w-full relative" style={{ aspectRatio }}>
            <Image
                src={imageSrc}
                width={imageWidth}
                height={imageHeight}
                className="w-full"
                alt="video preview"
            />
            <div className="absolute left-0 top-0 w-full h-full px-10 lg:px-0 flex items-center z-0">
                <video
                    src={videoSrc}
                    loop
                    muted
                    playsInline
                    autoPlay
                    aria-hidden="true"
                    className="w-full z-1"
                />
            </div>
        </div>
    );
};