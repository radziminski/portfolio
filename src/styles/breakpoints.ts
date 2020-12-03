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
  mobileSmall: 319,
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

type ValueForDevice = number | string | number[] | boolean;

export interface ValuesForDevices {
  mobileSmall?: ValueForDevice;
  mobileMedium?: ValueForDevice;
  mobileLarge?: ValueForDevice;
  tabSmall?: ValueForDevice;
  tabMedium?: ValueForDevice;
  tabLarge?: ValueForDevice;
  laptopSmall?: ValueForDevice;
  laptopMedium?: ValueForDevice;
  laptopLarge?: ValueForDevice;
  desktopSmall?: ValueForDevice;
  desktopMedium?: ValueForDevice;
  desktopLarge?: ValueForDevice;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getLargestValueForDevice = (values: any, device: Device) => {
  if (values[device]) return values[device];
  const devicePosition = Object.keys(BREAKPOINTS).indexOf(device);
  let returnValue = 0;
  let gotValue = false;

  Object.keys(BREAKPOINTS)
    .slice(devicePosition, Object.keys(BREAKPOINTS).length)
    .forEach((breakpoint) => {
      if (gotValue) return;
      if (values[breakpoint] !== null && values[breakpoint] !== undefined) {
        returnValue = values[breakpoint];
        gotValue = true;
      }
    });

  if (gotValue) return returnValue;

  Object.keys(BREAKPOINTS)
    .slice(0, devicePosition)
    .reverse()
    .forEach((breakpoint) => {
      if (values[breakpoint]) return values[breakpoint];
    });

  return returnValue;
};

export const getCurrentDevice = (): Device => {
  const deviceWidth: number = window.innerWidth;
  let currDevice: Device | null = null;

  for (const device in BREAKPOINTS) {
    if (
      deviceWidth <= BREAKPOINTS[device as Device] &&
      (currDevice ? deviceWidth > BREAKPOINTS[currDevice] : true)
    ) {
      currDevice = device as Device;
    }
  }

  return currDevice || 'desktopLarge';
};

export const getValueForDevice = (valuesForDevices: ValuesForDevices) => {
  return getLargestValueForDevice(valuesForDevices, getCurrentDevice());
};

export const LAYOUT_ORIENTATION_BREAKPOINT = BREAKPOINTS.tabSmall;

export default BREAKPOINTS;
