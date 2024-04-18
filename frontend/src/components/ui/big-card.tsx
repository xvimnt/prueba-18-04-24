import { Eyes, Like, Share } from "../icons";

interface PropsI {
  title: string;
  description: string;
  image: string;
  onView: () => void;
  onShare: () => void;
  onLike: () => void;
}
export const BigCard = ({
  title,
  description,
  image,
  onView,
  onShare,
  onLike,
}: PropsI) => {
  return (
    <div className="w-[743px] h-[437px] relative">
      <div className="w-[743px] h-[437px] left-0 top-0 absolute bg-lime-300 rounded-2xl" />
      <img
        className="w-[743px] h-[219px] left-0 top-0 absolute rounded-2xl"
        src="https://via.placeholder.com/743x219"
      />
      <div className="w-[205px] left-[12px] top-[245px] absolute text-black text-base font-semibold">
        {title}
      </div>
      <div className="w-[471px] h-[127px] left-[12px] top-[281px] absolute text-black text-xs font-normal">
        {description}
      </div>
      <div className=" h-[22px] left-[642px] top-[379px] absolute justify-start items-start gap-2 inline-flex">
        <button
          onClick={onView}
          className=" justify-center items-center gap-2.5 flex  w-[22px] h-[22px] rounded-full border border-black hover:bg-red-100"
        >
          <Eyes className="w-3 h-3" />
        </button>
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
      <div className="left-[648px] top-[281px] absolute flex flex-col gap-1 items-center justify-center text-blue-500">
        <Like className="w-6 h-6 fill-blue-500" />
        46 Likes
      </div>
    </div>
  );
};
