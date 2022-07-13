import { Links } from "../types/Links";

export const openLinks = (url: Links) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };