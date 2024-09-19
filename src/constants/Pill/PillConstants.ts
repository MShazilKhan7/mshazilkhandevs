export const getPillVariantStyles = (variant: string) => {
  switch (variant) {
    case "outlined":
      return "border border-1 border-white text-white";
      break;
    case "hover-outlined":
      return "hover:border hover:border-1 hover:border-white text-white";
    case "text":
      return "text-white";
    default:
      break;
  }
};
