import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() =>
  import("cloudinary-core").then((Cloudinary) => {
    import("cloudinary-video-player/dist/cld-video-player").then((vplib,Cloudinary) => {
      const cloudinary = new Cloudinary({
        cloud_name: "demo",
        secure: true,
      });
      const videoPlayerInit = () => {
        const cld = cloudinary();
        cld.videoPlayer("vp", {
          publicId: "race_road_car",
          controls: true,
          preload: "auto",
          muted: true,
          autoplay: false,
          width: 300,
        });
      };
      useEffect(() => {
        videoPlayerInit();
      }, []);
    });
  })
);

export default function VideoPlayer() {
  return (
    <div>
      <DynamicComponent />
      <video id="vp" />
    </div>
  );
}
