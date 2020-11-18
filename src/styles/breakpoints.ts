export type Device =
  | 'mobileSmall'
  | 'mobileMedium'
  | 'mobileLarge'
  | 'tabSmall'
  | 'tabMedium'
  | 'tabLarge'
  | 'laptopSmall'
  | 'laptopMedium'
  | 'laptopLarge'
  | 'desktopSmall'
  | 'desktopMedium'
  | 'desktopLarge';

export const BREAKPOINTS: Record<Device, number> = {
  mobileSmall: 320,
  mobileMedium: 460,
  mobileLarge: 600,
  tabSmall: 720,
  tabMedium: 800,
  tabLarge: 900,
  laptopSmall: 1080,
  laptopMedium: 1280,
  laptopLarge: 1440,
  desktopSmall: 1500,
  desktopMedium: 1660,
  desktopLarge: 1920
};

export interface ValuesForDevices {
  mobileSmall?: number;
  mobileMedium?: number;
  mobileLarge?: number;
  tabSmall?: number;
  tabMedium?: number;
  tabLarge?: number;
  laptopSmall?: number;
  laptopMedium?: number;
  laptopLarge?: number;
  desktopSmall?: number;
  desktopMedium?: number;
  desktopLarge?: number;
}

const getLargestValueForDevice = (
  values: Record<Device, number>,
  device: Device
) => {
  // if (values[device]) return values[device];
  // const devicePosition = Object.keys(BREAKPOINTS).indexOf(device);
  // Object.keys(BREAKPOINTS)
  //   .reverse()
  //   .slice(0, devicePosition)
  //   .forEach((breakpoint: keyof typeof values) => {
  //     if (values[breakpoint]) return values[breakpoint];
  //   });
};

export const getValueForDevice = (valuesForDevices: ValuesForDevices) => {
  const deviceWidth = window.innerWidth;
  if (deviceWidth >= BREAKPOINTS.desktopLarge)
    return valuesForDevices.desktopLarge;
};

export default BREAKPOINTS;
