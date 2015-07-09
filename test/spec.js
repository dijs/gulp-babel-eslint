'use strict';

import should from 'should';
import Example from '../dist/Example';

describe('Template', () => {
	it('should be testing', () => {
		new Example().something(3).should.be.exactly(6);
		should.not.exist(null);
	});
});
