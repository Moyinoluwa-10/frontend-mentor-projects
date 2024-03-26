const FaqItem = ({
  question,
  answer,
  id,
  isActive,
  onToggle,
}: {
  question: string;
  answer: string;
  id: number;
  isActive: number | null;
  onToggle: (arg1: number) => void;
}) => {
  return (
    <>
      <div className="py-5">
        <h5
          className={
            isActive === id
              ? "text-dark-purple hover:text-[#AD28EB] font-semibold flex items-center justify-between gap-7 transition-all cursor-pointer"
              : "text-dark-purple hover:text-[#AD28EB] font-semibold flex items-center justify-between gap-7 transition-all cursor-pointer"
          }
          onClick={() => onToggle(id)}
        >
          {question}
          {isActive === id ? (
            <img src="/icon-minus.svg" alt="icon-minus" />
          ) : (
            <img src="/icon-plus.svg" alt="icon-plus" />
          )}
        </h5>
        <p
          className={
            isActive === id
              ? "my-4 overflow-hidden max-h-[200px] transition-all duration-300 text-grayish-purple"
              : "overflow-hidden max-h-0 transition-all duration-300 text-grayish-purple"
          }
        >
          {answer}
        </p>
      </div>
      <hr className="bg-light-purple" />
    </>
  );
};

// FaqItem.propTypes = {
//   question: PropTypes.string,
//   answer: PropTypes.string,
//   id: PropTypes.number,
//   isActive: PropTypes.string,
//   onToggle: PropTypes.func,
// };

export default FaqItem;
