import {
  CheckIcon,
  Cross2Icon,
  QuestionMarkIcon,
  RowSpacingIcon,
} from "@radix-ui/react-icons";

const className = "h-3 w-3";

function Expand({ value }: { value: boolean }) {
  return value ? (
    <Cross2Icon className={className} />
  ) : (
    <RowSpacingIcon className={className} />
  );
}

function Learn({ value }: { value: boolean }) {
  return value ? (
    <CheckIcon className={className} />
  ) : (
    <QuestionMarkIcon className={className} />
  );
}

export const Icons = {
  Expand,
  Learn,
};
