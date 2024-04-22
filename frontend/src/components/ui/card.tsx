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
  const TITLE_MAX_LENGTH = 45;
  const DESCRIPTION_MAX_LENGTH = 100;
  return (
    <div className="w-[245px] h-[320px] relative">
      <div className="w-[245px] h-[320px] left-0 top-0 absolute bg-[#ABFFE5] rounded-2xl" />
      <div className="w-[245px] h-[238px] left-0 top-0 absolute flex-col justify-start items-center gap-3 inline-flex">
        <img
          className="w-[245px] h-[150px] rounded-2xl"
          src={
            image
              ? image
              : "https://dummyimage.com/245x150/33ab6f/fff&text=Sin+imagen"
          }
        />
        <div className="flex-col justify-start items-end gap-2 flex">
          <div className="w-[205px] text-black text-base font-semibold">
            {title?.length > TITLE_MAX_LENGTH
              ? title.slice(0, TITLE_MAX_LENGTH) + "..."
              : title}
          </div>
          <div className="w-[205px] text-black text-xs font-normal">
            {description?.length > DESCRIPTION_MAX_LENGTH
              ? description.slice(0, DESCRIPTION_MAX_LENGTH) + "..."
              : description}
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
  );
};
