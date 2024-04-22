import { Like, Share } from "../icons";

interface PropsI {
  title: string;
  description: string;
  image_url: string;
  creator: string[];
  likedState: boolean;
  pubDate: string;
  likes: number;
  onShare: () => void;
  onLike: () => void;
}
export const BigCard = ({
  title,
  description,
  image_url,
  likes,
  likedState,
  pubDate,
  creator,
  onShare,
  onLike,
}: PropsI) => {
  const date = new Date(pubDate);
  return (
    <div className="w-full md:w-[750px] h-fit bg-[#ABFFE5] rounded-2xl space-y-4">
      <img
        className="w-full h-50 md:h-[400px] left-0 top-0 rounded-t-2xl"
        src={image_url}
      />
      <div className="space-y-3 px-4">
        <div className="w-full text-black text-base font-semibold">{title}</div>
        <div className="w-full text-black text-xs font-normal">
          {description}
        </div>
        <div className="space-y-1">
          <div className="w-full text-gray-800 text-xs font-normal">
            {date.toDateString()}
          </div>
          <div className="w-full text-gray-800 text-xs font-normal">
            {creator?.map((c) => c)}
          </div>
        </div>
        <div className="justify-start items-start gap-2 inline-flex">
          <button
            onClick={onShare}
            className="justify-center items-center gap-2.5 flex  w-[22px] h-[22px] rounded-full border border-black hover:bg-blue-200"
          >
            <Share className="w-3 h-3" />
          </button>
          <button
            onClick={onLike}
            className={`justify-center items-center gap-2.5 flex  w-[22px] h-[22px] rounded-full border border-black hover:bg-blue-200 ${
              likedState ?? "bg-blue-100"
            }`}
          >
            <Like className="w-3 h-3" />
          </button>
        </div>
        <div className="left-[648px] top-[281px] flex flex-col gap-1 items-center justify-center text-blue-500">
          <Like className="w-6 h-6 fill-blue-500" />
          {likes} Likes
        </div>
      </div>
    </div>
  );
};
