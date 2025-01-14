import { useState, useEffect, useMemo } from 'react';
import { InfoWindowProps } from './';
import { useEnableProperties, useProperties, useVisiable, useEventProperties } from '../common/hooks';

export interface UseInfoWindow extends InfoWindowProps {}

export default function useInfoWindow(props = {} as UseInfoWindow) {
  const { map, position, ...opts } = props;
  const [infoWindow, setInfoWindow] = useState<BMap.InfoWindow>();
  useMemo(() => {
    if (!BMap || !map) return;
    if (!infoWindow) {
      const win = new BMap.InfoWindow('', { ...opts });
      setInfoWindow(win);
    }
  }, [map]);

  const [isOpen, setIsOpen] = useState(opts.isOpen === undefined ? true : opts.isOpen);
  useEffect(() => {
    if (map && BMap && infoWindow) {
      if (!isOpen) {
        map.closeInfoWindow();
      } else if (position) {
        const point = new BMap.Point(position.lng, position.lat);
        map.openInfoWindow(infoWindow, point);
      }
    }
  }, [isOpen, infoWindow]);

  useVisiable(infoWindow!, props);
  useEventProperties<BMap.InfoWindow, UseInfoWindow>(infoWindow!, props, [
    'Close',
    'Open',
    'Maximize',
    'Restore',
    'ClickClose',
  ]);
  useProperties<BMap.InfoWindow, UseInfoWindow>(infoWindow!, props, [
    'Width',
    'Height',
    'Title',
    'Content',
    'MaxContent',
  ]);
  useEnableProperties<BMap.InfoWindow, UseInfoWindow>(infoWindow!, props, ['CloseOnClick', 'Maximize', 'AutoPan']);

  return {
    /**
     * 信息窗口实例对象
     */
    infoWindow,
    /**
     * 更新 信息窗口实例对象
     */
    setInfoWindow,
    isOpen,
    setIsOpen,
  };
}
