import { Eyes, Share } from "../icons";

interface PropsI {
  title: string;
  description: string;
  image: string;
  onView: () => void;
  onShare: () => void;
}

export const Card = ({
  title,
  description,
  image,
  onView,
  onShare,
}: PropsI) => {
  return (
    <div className="w-[1076px] h-[254px] justify-start items-start gap-8 inline-flex">
      <div className="w-[245px] h-[254px] relative">
        <div className="w-[245px] h-[254px] left-0 top-0 absolute bg-lime-300 rounded-2xl" />
        <div className="w-[245px] h-[238px] left-0 top-0 absolute flex-col justify-start items-center gap-3 inline-flex">
          <img className="w-[245px] h-[124px] rounded-2xl" src={image} />
          <div className="flex-col justify-start items-end gap-2 flex">
            <div className="w-[205px] text-black text-base font-semibold">
              {title}
            </div>
            <div className="w-[205px] text-black text-xs font-normal">
              {description}
            </div>
            <div className="justify-start items-start gap-2 inline-flex">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
