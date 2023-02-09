// Do not modify this file;

import { TestTestTest } from './customElement';
import "./widget.scss";

export const ELEMENT_ID = 'test-test-test';

if (!customElements.get(ELEMENT_ID)) {
	customElements.define(ELEMENT_ID, TestTestTest);
}
