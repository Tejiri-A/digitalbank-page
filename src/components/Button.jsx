import { twMerge } from "tailwind-merge";

const Button = ({ className }) => {
  return (
    <button
      type={`button`}
      className={twMerge(
        ` cursor-pointer w-40 h-11 rounded-full gradient-1 px-8 py-2 flex items-center justify-center !text-white text-7-bold capitalize   relative before:absolute before:size-full before:rounded-full before:bg-white before:inset-0 before:opacity-0 hover:before:opacity-25 before:transition-opacity before:duration-500 before:ease-out`,
        className,
      )}
    >
      request invite
    </button>
  );
};
export default Button;
