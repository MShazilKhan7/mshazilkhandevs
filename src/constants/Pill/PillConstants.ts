export const getPillVariantStyles = (variant: string) => {
  switch (variant) {
    case "outlined":
      return "border border-1";
      break;
    case "hover-outlined":
      return "hover:border border-light-gray_10 hover:border-light-gray_30 hover:border-1 dark:hover:border-white";
    case "text":
      return "";
    default:
      break;
  }
};
