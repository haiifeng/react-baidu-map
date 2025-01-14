import { useRef, useEffect, useState } from 'react';
import Markdown from '../../components/Markdown';
import { APILoader, Map, useMap, DrawingManager, useDrawingManager } from '../../../';

export default class Page extends Markdown {
  editorUrl = '/src/DrawingManager/README.md';
  dependencies = {
    APILoader,
    Map,
    useMap,
    DrawingManager,
    useDrawingManager,
    useRef,
    useEffect,
    useState,
  };
  getMdStr = () => import('../../../src/DrawingManager/README.md');
}
