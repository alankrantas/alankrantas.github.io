const getStore = <T>(v: T) => {
	let _v: T = $state(v);

	return {
		get value(): T {
			return _v;
		},
		set value(v: T) {
			_v = v;
		}
	};
};

export const screenSize = getStore<number>(0);
