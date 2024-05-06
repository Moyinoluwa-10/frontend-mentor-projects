import { FieldHookConfig, useField } from "formik";
import { motion, AnimatePresence } from "framer-motion";

type LabelProp = {
  label: string;
};

const TextInput = ({
  label,
  ...props
}: LabelProp &
  React.InputHTMLAttributes<HTMLInputElement> &
  React.ClassAttributes<HTMLInputElement> &
  FieldHookConfig<string>) => {
  const [field, meta] = useField(props);
  return (
    <div>
      {label && (
        <label
          htmlFor={props.name}
          className="uppercase text-smokey-grey font-bold block mb-1"
        >
          {label}
        </label>
      )}
      <input
        className={`w-full text-xl md:text-3xl px-3 md:px-5 py-2 md:py-3 border-2 rounded-lg font-bold text-smokey-grey appearance-none outline-none transition-all duration-300 focus:ring-2 focus:ring-purple focus:ring-opacity-40 ${
          meta.touched && meta.error ? "border-light-red" : "border-light-grey"
        }`}
        {...field}
        {...props}
      />
      <AnimatePresence>
        {meta.touched && meta.error ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeIn" }}
            className="text-light-red text-xs"
          >
            {meta.error}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default TextInput;
