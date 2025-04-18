export const formatNumber = (number: number) => {
    if (number >= 1000) {
      const suffixes = ['', "K", "M", "G", "T"];
      const suffixIndex = Math.floor(Math.log10(number) / 3);
      const shortNumber = (number / Math.pow(1000, suffixIndex)).toFixed(0);
      return shortNumber + suffixes[suffixIndex];
    }
    return number.toString();
  }
