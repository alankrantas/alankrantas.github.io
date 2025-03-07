export const getAge = () => {
	const birth = new Date('10 Mar 1984 11:58:00 GMT+8');
	const diff = new Date(Date.now() - birth.getTime());
	return diff.getUTCFullYear() - 1970;
};

export const replaceLink = (sourceText: string) => {
	return sourceText.replace(
		'a href=',
		"a class='link-info link-underline-opacity-25 link-underline-opacity-100-hover' target='_blank' rel='noreferrer noopener' href="
	);
};
