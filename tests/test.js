import { expect } from 'chai';
import t from '../dist/index';

describe('global clear', () => {
	it('clear sessionstorage', () => {
		t();
		expect(sessionStorage.length).eq(0);
	});
});
