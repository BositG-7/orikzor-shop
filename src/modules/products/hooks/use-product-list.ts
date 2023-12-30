import { useEffect, useMemo, useState } from 'react';
import { notifications } from '@mantine/notifications';

import { IApi } from '../types';
import { Api } from '..';

interface Props extends Partial<IApi.ProductsGet.Request> {}
export const useProductsList = ({ brand, brand__title, title, category }: Props) => {
	const [state, setState] = useState<any>({
		products: [],
		count: 0,
		isLoading: true
	});

	const defaultParams: IApi.ProductsGet.Request = useMemo(
		() => ({
			brand: brand || 1,
			brand__title: brand__title || '',
			title: title || '',
			category: category || ''
		}),
		[brand, brand__title, title, category]
	);

	useEffect(() => {
		setState((prev: any) => ({ ...prev, isLoading: true }));
		const request = async () => {
			try {
				const { data } = await Api.ProductsGet(defaultParams);
				// @ts-expect-error

				setState({ products, count: data.length, isLoading: false });
			} catch (err: any) {
				notifications.show({ message: err?.message, color: 'red' });
				setState({ students: [], count: 0, isLoading: true });
			}
		};

		request();
	}, [defaultParams]);

	return state;
};
