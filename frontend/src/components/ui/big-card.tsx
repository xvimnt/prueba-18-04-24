import { Like, Share } from "../icons";

interface PropsI {
  title: string;
  description: string;
  image_url: string;
  likes: number;
  onShare: () => void;
  onLike: () => void;
}
export const BigCard = ({
  title,
  description,
  image_url,
  likes,
  onShare,
  onLike,
}: PropsI) => {
  return (
    <div className="w-[750px] h-fit bg-lime-300 rounded-2xl">
      <img
        className="w-[750px] h-[400px] left-0 top-0 rounded-t-2xl"
        src={image_url}
      />
      <div className="w-[205px] left-[32px] top-[245px] text-black text-base font-semibold">
        {title}
      </div>
      <div className="w-[471px] h-[127px] left-[32px] top-[281px] text-black text-xs font-normal">
        {description}
      </div>
      <div className=" h-[22px] left-[642px] top-[379px] justify-start items-start gap-2 inline-flex">
        <button
          onClick={onShare}
          className="justify-center items-center gap-2.5 flex  w-[22px] h-[22px] rounded-full border border-black hover:bg-red-100"
        >
          <Share className="w-3 h-3" />
        </button>
        <button
          onClick={onLike}
          className="justify-center items-center gap-2.5 flex  w-[22px] h-[22px] rounded-full border border-black hover:bg-red-100"
        >
          <Like className="w-3 h-3" />
        </button>
      </div>
      <div className="left-[648px] top-[281px] flex flex-col gap-1 items-center justify-center text-blue-500">
        <Like className="w-6 h-6 fill-blue-500" />
        {likes} Likes
      </div>
    </div>
  );
};
