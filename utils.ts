export const formatFeatureText = (text: string) => {
  if (!text) return "";
  const formatted = text.replace(/_/g, " ");
  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
};
