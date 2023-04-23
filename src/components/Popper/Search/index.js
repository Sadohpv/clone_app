import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { searchService } from '~/apiServices/searchService';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper/index';
import { useRef, useState, useEffect } from 'react';
import { useDebounce } from '~/hooks';

const cx = classNames.bind(styles);
function Search() {
	const [searchResult, setSearchResult] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const [showResult, setShowResult] = useState(false);
	const [loading, setLoading] = useState(false);

	const debounced = useDebounce(searchValue, 500);

	useEffect(() => {
		if (!searchValue.trim()) {
			// .trim() loại bỏ khoảng trắng nếu phía backend không trim search value

			setSearchResult([]);

			return;
		}

		const fetchApi = async () => {
			setLoading(true);

			const results = await searchService(debounced);
			setSearchResult(results);

			setLoading(false);
		};
		fetchApi();

		// encodeURIComponent : mã hóa tránh trùng với kí tự quy ước của url
	}, [debounced]);

	const inputSearch = useRef();
	// console.log(inputSearch);
	const handleClear = () => {
		setSearchValue('');
		setSearchResult([]);
		inputSearch.current.focus();
	};

	const handleHideResult = () => {
		setShowResult(false);
	};
	const handleClickAgain = () => {
		setShowResult(true);
		inputSearch.current.addEventListener('mouseover', () => {
			inputSearch.current.focus();
		});
	};
	const handleChange = (e) => {
		const searchValueCurrent = e.target.value;
		if (!searchValueCurrent.startsWith(' ')) {
			setSearchValue(searchValueCurrent);
		}
	};

	const handleKeyDown = (e) => {
		if(e.keyCode === 13){
			alert('Search');
		}
	}
	return (
		<>
			<HeadlessTippy
				// trigger="click"

				visible={showResult}
				interactive
				zIndex={999}
				offset={[-50, -50]}
				render={(attrs) => (
					<div className={cx('search-result')} tabIndex="-1" {...attrs}>
						<PopperWrapper>
							<div className={cx('search_input-wrapper')}>
								<input
									className={cx('search_input')}
									placeholder="Search something...."
									spellCheck={false}
									onChange={handleChange}
									value={searchValue}
									ref={inputSearch}
									onKeyDown={handleKeyDown}
								/>
								{!!searchValue && !loading && (
									<Button className={cx('search_close-btn')} primary onClick={handleClear}>
										<FontAwesomeIcon icon={faCircleXmark} />
									</Button>
								)}

								{loading && (
									<Button primary className={cx('loading')}>
										<FontAwesomeIcon icon={faSpinner} spin />
									</Button>
								)}
							</div>
							{searchResult.length > 0 && <h4 className={cx('search_result-title')}>Account</h4>}

							{searchResult.map((result) => (
								<AccountItem key={result.id} data={result} />
							))}
						</PopperWrapper>
					</div>
				)}
				onClickOutside={handleHideResult}
			>
				<div className={cx('search')} onClick={handleClickAgain}>
					<p className={cx('search-title')}>Wanna search something click here</p>
					<Button primary className={cx('search_find-btn')}>
						<FontAwesomeIcon icon={faMagnifyingGlass} />
					</Button>
				</div>
			</HeadlessTippy>
		</>
	);
}

export default Search;
