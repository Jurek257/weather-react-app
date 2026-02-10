import { describe, expect, it } from "vitest";
import { formateIconUrl } from "./FormatWeather";

describe("formateIconUrl", () => {
  const iconCode: string = "04d";

  it("input a valid icon code", () => {
    const result = formateIconUrl(iconCode);

    expect(result).toBe("https://openweathermap.org/img/wn/04d@2x.png");
  });
});
