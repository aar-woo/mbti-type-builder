const copyToClipboard = (text: string) => {
  try {
    navigator.clipboard.writeText(text);
  } catch {
    console.error("Error copying to clipboard");
  }
};

export default copyToClipboard;
