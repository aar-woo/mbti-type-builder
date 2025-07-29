const copyToClipboard = async (
  text: string
): Promise<{ success: boolean; error?: string }> => {
  try {
    await navigator.clipboard.writeText(text);
    return { success: true };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Error copying to clipboard";
    console.error("Error copying to clipboard");
    return { success: false, error: errorMessage };
  }
};

export default copyToClipboard;
