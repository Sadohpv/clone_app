import * as request from '~/utils/request';

export const searchService = async (q, type = 'less') => { // async : promise function
    try {
        const res = await request.get(`users/search`, {
            params: {
                q: q,
                type: type,
            },
        });

        return res.data;

        // Đã được bỏ ra ngoài
        // //.then promise
        // setSearchResult(res.data); // res trả về object .data của axios và .data 2 của api
        // setLoading(false);

    } catch (error) {
        // setLoading(false);
        console.log(error);
    }
};